import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-4 text-secondary">
        <div className="fs-4 text-secondary icon-hover">
          <a href="https://discord.com/users/877191910442274876" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-secondary'>
            <FontAwesomeIcon icon={faDiscord} className="mx-2" />
          </a>
          <a href="https://github.com/prateekrauniyar345" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-secondary'>
            <FontAwesomeIcon icon={faGithub} className="mx-2" />
          </a>
          <a href="https://www.linkedin.com/in/pratik-rauniyar-531a97174/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-secondary'>
            <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
          </a>
          <a href="https://www.instagram.com/rauniyar.pratik/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-secondary'>
            <FontAwesomeIcon icon={faInstagram} className="mx-2" />
          </a>
          <a href="mailto:prateekrauniyar345@gmail.com" className='text-decoration-none text-secondary'>
            <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
          </a>
        </div>
        <p className='text-center text-secondary small'>© 2023 Pratik Rauniyar. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;