import { ProjectListing } from '../components/project/ProjectListing';
import { Section } from '../components/layout/section/Section';
import { MultiSelect } from '../components/ui/other/MultiSelect';
import { useState } from 'react';
import { projectOptions } from '../constants/index';
import { myProjects } from '../constants/index.js';

export const ProjectPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const handleSelectChange = (selectedTags) => {
    if (selectedTags === null) {
      setFilteredProjects(myProjects);
    } else {
      const selectedValues = selectedTags.map((obj) => obj.value);
      console.log(selectedValues);
      setFilteredProjects(myProjects.filter((project) => selectedValues.some((tag) => project.tagsList.includes(tag))));
    }
  };

  return (
    <div className="mt-40">
      <Section id={'projects'} title={'My Projects'}>
        <div className="md:w-[30vw] max-w-screen-md m-5 border-2 border-gray-600 p-1 rounded-md ">
          <MultiSelect options={projectOptions} onChange={handleSelectChange} />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10 w-full">
          <ProjectListing myProjects={filteredProjects} />
        </div>
      </Section>
    </div>
  );
};
