import { useRef, useState } from 'react';
import { Modal } from '../ui/modal/Modal';
import { Project } from './Project';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetail } from './ProjectDetail';
export const ProjectListing = ({ myProjects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const modalClickHandler = (project) => {
    if (!modalOpen) {
      setSelectedProject(project);
      open();
    } else {
      close();
    }
  };
  return (
    <>
      {myProjects.map((project, index) => (
        <div class="relative group ">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2a5f2a] to-[#1c201c] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <motion.div
            className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-[#0e0e10]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            viewport={{ amount: 0.5 }}>
            <Project project={project} onClickHandler={modalClickHandler} />
          </motion.div>
        </div>
      ))}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <ProjectDetail project={selectedProject} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
