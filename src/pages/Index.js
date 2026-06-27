import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import Education from '../components/Education';
import degrees from '../data/degrees';
import news from '../data/news';

const { PUBLIC_URL } = process.env;

const VISIBLE_NEWS_COUNT = 5;

const formatNewsDate = (date) => {
  const parsed = new Date(`${date}T00:00:00`);
  return parsed.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const News = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const visibleItems = expanded ? sortedItems : sortedItems.slice(0, VISIBLE_NEWS_COUNT);
  const hasHiddenItems = sortedItems.length > VISIBLE_NEWS_COUNT;

  return (
    <section className="home-news">
      <h3>News</h3>
      <div className="home-news-list">
        {visibleItems.map((item) => (
          <article className="home-news-item" key={`${item.date}-${item.text}`}>
            <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </article>
        ))}
      </div>
      {hasHiddenItems && (
        <button
          className="home-news-toggle"
          type="button"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? 'Collapse news' : 'View full news archive'}
        </button>
      )}
    </section>
  );
};

News.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ),
};

News.defaultProps = {
  items: [],
};

const Index = () => (
  <Main
    description="Sam Cong's personal website."
  >
    <article className="post home-profile" id="index">
      <section className="home-hero">
        <div className="home-profile-card">
          <img
            src={`${PUBLIC_URL}/images/me.jpg`}
            alt="Sam Cong"
            className="home-profile-photo"
          />
          <h1>Sam Cong</h1>
          <TypeAnimation
            sequence={[
              'I study real-world brain-behavior dynamics.', 2000,
              'I develop digital phenotyping methods.', 2000,
              'I work on neural decoding and BCI.', 2000,
              'I build adaptive neurotechnology systems.', 2000,
            ]}
            wrapper="p"
            cursor
            repeat={Infinity}
            className="home-typing"
          />
          <p className="home-pronouns">(he/him)</p>
          <p className="home-position">
            Neurobiology and Behavior PhD student
            <span>Columbia University</span>
          </p>
          <p className="home-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                width: '0.85em',
                height: '0.85em',
                verticalAlign: '-0.1em',
                marginRight: '0.3em',
              }}
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            New York, New York
          </p>
          <div className="home-social-icons">
            <ContactIcons />
          </div>
        </div>

        <div className="home-summary">
          <h3>About</h3>
          <div className="home-about-card">
            <p className="home-about-lead">
              I am an incoming
              {' '}
              <strong>Neurobiology and Behavior PhD student at Columbia University</strong>
              .
            </p>
            <p>
              I develop computational methods to{' '}
              <strong>
                understand and treat psychiatric and neurological disorders in real-world settings
              </strong>
              , working across the sensing spectrum—from wearable behavioral
              sensors to mobile and intracranial neural recordings.
            </p>
            <p>
              These approaches span digital phenotyping, neural decoding, BCI, and
              {' '}
              closed-loop neurostimulation, with the overarching goal of building a unified
              {' '}
              <strong>real-time brain–behavior platform for personalized, adaptive care.</strong>
            </p>
            <div className="home-about-tags" aria-label="Research areas">
              <span>📱 Digital Phenotyping</span>
              <span>🧠 Neural Decoding &amp; BCI</span>
              <span>⚡ Closed-loop Neurostimulation</span>
            </div>
          </div>
          <div className="home-actions">
            <a
              href={`${PUBLIC_URL}/Academic_CV_Tianyue_Cong.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="button home-cv-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  width: '1.1em',
                  height: '1.1em',
                  verticalAlign: '-0.2em',
                  marginRight: '0.45em',
                }}
              >
                <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM11.5 9.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
              </svg>
              View/download academic CV
            </a>
          </div>
          <div className="home-education">
            <Education data={degrees} />
          </div>
          <News items={news} />
        </div>
      </section>
    </article>
  </Main>
);

export default Index;
