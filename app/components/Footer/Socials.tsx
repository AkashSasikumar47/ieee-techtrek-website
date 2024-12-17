import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div className="mt-3 md:text-end space-x-2">
      <a
        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
        href="https://www.linkedin.com/company/ieeesrmist/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="shrink-0 size-3.5" />
      </a>
      <a
        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
        href="https://www.instagram.com/ieeesrmist"
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className="shrink-0 size-3.5" />
      </a>
      <a
        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
        href="https://github.com/IEEE-SRMIST"
        target='_blank'
        rel='noopener noreferrer'
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} className="shrink-0 size-3.5" />
      </a>
      <a
        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
        href="https://www.twitter.com/ieeesrmist"
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} className="shrink-0 size-3.5" />
      </a>
    </div>
  );
};

export default Socials;
