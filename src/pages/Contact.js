import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';
import contactItems from '../data/contact';

// Material Design icon paths (24×24 viewBox)
const PATHS = {
  science: 'M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z',
  work: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z',
  psychology: 'M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43zM13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7zm3 10h-1l-1 1h-2l-1-1h-1v-1l1-1v-2l1-1h2l1 1v2l1 1v1z',
  graphicEq: 'M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z',
  bolt: 'M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z',
  barChart: 'M4 9h4v11H4zm6-5h4v16h-4zm6 8h4v8h-4z',
  heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  memory: 'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z',
};

const SvgIcon = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

SvgIcon.propTypes = { d: PropTypes.string.isRequired };

const researchTopics = [
  { path: PATHS.psychology, label: 'Computational psychiatry' },
  { path: PATHS.graphicEq, label: 'Digital phenotyping & digital twins' },
  { path: PATHS.bolt, label: 'Neuromodulation & BCI' },
];

const industryTopics = [
  { path: PATHS.barChart, label: 'Data science & machine learning' },
  { path: PATHS.heart, label: 'Digital Health' },
  { path: PATHS.memory, label: 'Neurotech & Neuro-AI' },
];

const formatContactDisplay = ({ label, link }) => {
  if (label === 'Email') return 'samc010831@gmail.com';
  return link.replace(/^https?:\/\//, '').replace(/\/$/, '');
};

export const ContactSection = () => (
  <article className="post" id="contact">
    <header>
      <div className="title">
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </header>
    <div className="contact-section">
      <div className="contact-intro-text">
        <p className="contact-greeting">
          ☕ I am always happy to connect! Feel free to reach out about:
        </p>
      </div>
      <div className="contact-hubs">
        <div className="contact-hub">
          <div className="contact-hub-header">
            <span className="contact-hub-cat-icon">
              <SvgIcon d={PATHS.science} />
            </span>
            <span className="contact-hub-title">Research &amp; Collaborations</span>
          </div>
          <ul className="contact-hub-items">
            {researchTopics.map(({ path, label }) => (
              <li key={label}>
                <span className="contact-item-icon"><SvgIcon d={path} /></span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-hub">
          <div className="contact-hub-header">
            <span className="contact-hub-cat-icon">
              <SvgIcon d={PATHS.work} />
            </span>
            <span className="contact-hub-title">Industry Opportunities</span>
          </div>
          <ul className="contact-hub-items">
            {industryTopics.map(({ path, label }) => (
              <li key={label}>
                <span className="contact-item-icon"><SvgIcon d={path} /></span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <hr className="contact-divider" />
    <p className="contact-channels">
      Email and LinkedIn are the best ways to reach me.
    </p>
    <ul className="contact-list">
      {contactItems.map((item) => (
        <li
          className={`contact-list-row${['Email', 'LinkedIn'].includes(item.label) ? ' contact-list-row--primary' : ''}`}
          key={item.label}
        >
          <span className="contact-list-icon">
            <FontAwesomeIcon icon={item.icon} />
          </span>
          <span className="contact-list-label">{item.label}</span>
          <a
            href={item.link}
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="contact-list-link"
          >
            {formatContactDisplay(item)}
          </a>
        </li>
      ))}
    </ul>
  </article>
);

const Contact = () => (
  <Main title="Contact" description="Get in touch with Sam Cong.">
    <ContactSection />
  </Main>
);

export default Contact;
