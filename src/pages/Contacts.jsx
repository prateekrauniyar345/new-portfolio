import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

const contactData = [
  {
    icon: faEnvelope,
    title: "Email",
    subtitle: "prateekrauniyar345@gmail.com",
    link: "mailto:prateekrauniyar345@gmail.com"
  },
  {
    icon: faInstagram,
    title: "Instagram",
    subtitle: "@rauniyar.pratik",
    link: "https://www.instagram.com/rauniyar.pratik/"
  },
  {
    icon: faLinkedin,
    title: "LinkedIn",
    subtitle: "in/PratikRauniyar",
    link: "https://www.linkedin.com/in/pratik-rauniyar-531a97174/"
  },
  {
    icon: faDiscord,
    title: "Discord",
    subtitle: "Join Server",
    link: "https://discord.com/users/877191910442274876"  
  },
];

const Contact = () => {

  const { theme, toggleTheme } = useContext(ThemeContext); 
  return (
    <div className="container my-5" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      <div className="d-flex flex-column mt-4 mb-4">
        <h3>Contacts</h3>
        <p>Let's Get Connected. </p>
      </div>

      <div className="row g-4 mt-4">
        {contactData.map((item, idx) => (
          <div key={idx} className="col-12 col-md-6 small hoverEffect">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              <div 
                style={{ color: theme === 'dark' ? 'white' : 'black' }}
                className="border border-secondary rounded rounded-4 p-4 h-100 d-flex align-items-start gap-3 hover-shadow">
                <FontAwesomeIcon icon={item.icon} size="lg" />
                <div>
                  <div className="fw-normal">{item.title}</div>
                  <div className="text-secondary">{item.subtitle}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
