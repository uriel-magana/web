import React from 'react'

import Project from '../components/project'

import projects from "../information/projects.json";

const Projects = () => {
  return (
    <div class="center">
      {projects.map((project) => {
        return (
          <div>
            <Project project={project}></Project>
          </div>
        );
      })}
    </div>
  );
}; 

export default Projects;