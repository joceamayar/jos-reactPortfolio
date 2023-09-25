
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">

      <a href="https://github.com/joceamayar" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/jocelinamaya?trk=people-guest_people_search-card" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <small>
                Copyright © 2023 Jocelin Amaya. 
              </small>
    </footer>
  );
}

export default Footer;