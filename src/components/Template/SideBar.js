import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
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
        Hi there, this&apos;s Sam speaking! I am currently a second-year master in {' '}
        computational social science (MACSS) student at the {' '}
        <a href="https://www.uchicago.edu/"> University of Chicago </a>. {' '}
        I have a broad interest in cognitive modeling to better understand {' '}
        human cognitive processes across the specturm of mental health, {' '}
        including individuals with and without mental disorder. {' '}
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
