import { motion } from 'framer-motion';
import { MediaModal } from '../ui/modal/MediaModal';
import { useState } from 'react';
export const ProjectDetail = ({ project }) => {
  const projectCount = project.images.length;
  const imagesCount = project.images.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProjectImage = project.images[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <>
      <div className={`grid ${imagesCount > 0 ? 'lg:grid-cols-2' : ''} grid-cols-1 mt-5 gap-5 w-full`}>
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={project.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={project.logoStyle}>
            <img className=" h-10 shadow-sm" src={project.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">Technical Overview</p>

            <ul className="animatedText list-disc pl-5">
              {project.summaryPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {project.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {imagesCount > 0 && (
          <div className=" rounded-lg h-96 md:h-full">
            <div className="flex flex-col justify-between">
              <div className="relative h-full">
                <div className="w-full h-full">
                  <MediaModal imgSrc={currentProjectImage.src} videoSrc={currentProjectImage.isVideo} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-10">
                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                  <img src="/assets/left-arrow.png" alt="left arrow" />
                </button>

                <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                  <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
