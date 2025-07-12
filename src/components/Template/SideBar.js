import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" style={{ width: '250px', height: '240px' }} />
      </Link>
      <header>
        <h2>Sam Cong</h2>
        <p>
          <a href="congtianyue233@gmail.com">congtianyue233@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am currently a full-time research assistant working with  {' '}
        <a href="https://www.digitalmentalhealth.org/">Dr. John Torous </a>  {' '}
        at Beth Israel Deaconess Medical Center.  {' '}
        My research bridges theory-driven and data-driven approaches in {' '}
        computational psychiatry to improve clinical relevance. {' '}
        I study how cognitive and affective dysfunctions unfold in real-world {' '}
        settings, with particular interests in decision-making, {' '}
        spontaneous thought, and anticipatory anxiety. I also integrate {' '}
        multimodal data—behavioral, neurophysiological, and digital {' '}
        to develop multilmodal fusion models that provide interpretable and {' '}
        personalized mental health insights. {' '}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Check out My Resume
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Sam Cong <Link to="/">congtianyue233@gmail.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
