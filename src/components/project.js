import React from 'react'

import "../index.css";

const Project = ({ project }) => {
  return (
    <div class="project" onClick={() => window.open(project.link)}>
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>tags: {project.tags.join(", ")}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
          See more
        </a>
        <br></br>
      </div>
      <img
        class="project-image"
        src={process.env.PUBLIC_URL + `/images/${project.img}`}
        alt={project.name}
      ></img>
    </div>
  );
}; 

export default Project;