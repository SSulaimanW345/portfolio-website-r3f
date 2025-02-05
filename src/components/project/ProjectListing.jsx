import { useRef, useState } from 'react';
import { Modal } from '../ui/modal/Modal';
import { Project } from './Project';
import { AnimatePresence } from 'framer-motion';
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
      {myProjects.map((project) => (
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <Project project={project} onClickHandler={modalClickHandler} />
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
