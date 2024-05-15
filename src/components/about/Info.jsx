import React from 'react';
import { adData } from '../myLinks';

const Info = () => {

    const experience = adData.find(link => link.title === 'Experience')?.data;
    const projects = adData.find(link => link.title === 'Projects')?.data;
    const support = adData.find(link => link.title === 'Support')?.data;
  
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
                {experience}
            </span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">
                {projects} Projects
            </span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">
                {support}
            </span>
        </div>
    </div>
)
}

export default Info