import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <sections className="skills sections" id="skills">
        <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
      </sections>
  )
}

export default Skills
