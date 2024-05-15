import React from 'react';
import { myLinks } from '../myLinks';

const Social = () => {
  const whatsappLink = myLinks.find(link => link.title === 'Whatsapp')?.link;
  const instagramLink = myLinks.find(link => link.title === 'Instagram')?.link;
  const linkedinLink = myLinks.find(link => link.title === 'Linkedin')?.link;
  const githubLink = myLinks.find(link => link.title === 'Github')?.link;

  return (
    <div className="home__social">
        <a href={instagramLink} className="home__social-icon" target='_blank'>
            <i class="uil uil-instagram"></i>
        </a>

        <a href={linkedinLink} className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href={githubLink} className="home__social-icon" target='_blank'>
            <i class="uil uil-github-alt"></i>
        </a>

    </div>
  )
}

export default Social