import React from 'react'

import "../index.css";

const Resume = () => {
  let id = "18bjIu1SGcFgNzLlpvcrwiIn0xtOUU4zo";
  let url = `https://drive.google.com/file/d/${id}`;

  return (
    <div class="center">
      <a href={url + "/view"} target="_blank" rel="noreferrer">
        {" "}
        <button class="button">Download</button>
      </a>
      <iframe title="resume" class="pdf" src={url + "/preview"} />
    </div>
  );
}; 

export default Resume;