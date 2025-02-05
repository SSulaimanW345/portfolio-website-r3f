'use client';
import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// import { useMediaQuery } from '@/hooks/use-media-query';
// import { XIcon } from 'lucide-react';
const transition = {
  type: 'spring',
  duration: 0.4,
};
export function MediaModal({ imgSrc, videoSrc, className }) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  //   const isDesktop = useMediaQuery('(min-width:768px)');
  const uniqueId = useId();
  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMediaModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMediaModalOpen]);
  return (
    <>
      <MotionConfig transition={transition}>
        <>
          <motion.div
            className="w-full h-full flex relative  flex-col overflow-hidden     dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950"
            layoutId={`dialog-${uniqueId}`}
            style={{
              borderRadius: '12px',
            }}
            onClick={() => {
              setIsMediaModalOpen(true);
            }}>
            {!videoSrc && imgSrc && (
              <motion.div layoutId={`dialog-img-${uniqueId}`} className="w-full h-full">
                <img
                  src={imgSrc}
                  alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                  className=" w-full object-cover h-full"
                />
              </motion.div>
            )}
            {videoSrc && imgSrc && (
              <motion.div layoutId={`dialog-video-${uniqueId}`} className="w-full h-full">
                <video autoPlay muted loop className="h-full w-full object-cover  rounded-sm">
                  <source src={imgSrc} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        </>
        <AnimatePresence initial={false} mode="sync">
          {isMediaModalOpen && (
            <>
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 h-full w-full dark:bg-black/25 bg-transparent backdrop-blur-sm "
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsMediaModalOpen(false);
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 flex items-center justify-center z-50">
                <motion.div
                  className="pointer-events-auto relative flex flex-col overflow-hidden items-center  dark:bg-gray-950 bg-gray-800 border w-[75%] h-[70%] "
                  layoutId={`dialog-${uniqueId}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: '24px',
                  }}>
                  {imgSrc && (
                    <motion.div layoutId={`dialog-img-${uniqueId}`} className="w-full h-full">
                      <img src={imgSrc} alt="" className="h-full w-full object-cover" />
                    </motion.div>
                  )}
                  {videoSrc && (
                    <motion.div layoutId={`dialog-video-${uniqueId}`} className="w-4/5 h-full">
                      <video autoPlay muted loop controls className="h-full w-full object-cover  rounded-sm">
                        <source src={imgSrc} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsMediaModalOpen(false)}
                    className="absolute right-6 top-6 p-3 text-zinc-50 cursor-pointer dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800"
                    type="button"
                    aria-label="Close dialog">
                    {' '}
                    <FaTimes size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
