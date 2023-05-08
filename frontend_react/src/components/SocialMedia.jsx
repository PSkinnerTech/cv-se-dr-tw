import React from 'react';
import { BsTwitter, BsGithub, BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/PSkinnerTech" alt="twitter" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/PSkinnerTech" alt="github" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://linkedin.com/in/patrickaskinner"
        alt="linkedin"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://blog.patrickskinner.tech" alt="blog" target="_blank">
        <SiHashnode />
      </a>
    </div>
    <div>
      <a href="https://blog.patrickskinner.tech" alt="blog" target="_blank">
        <BsYoutube />
      </a>
    </div>
  </div>
);

export default SocialMedia;
