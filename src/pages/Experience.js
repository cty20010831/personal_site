import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ExperienceSection from '../components/Experience';

import work from '../data/work';

export const ExperienceArticle = () => (
  <article className="post academic-page" id="experience">
    <header>
      <div className="title">
        <h2>
          <Link to="/experience">Selected Research Experience</Link>
        </h2>
      </div>
    </header>
    <div className="experience-cv-action">
      <a
        href="/personal_site/Academic_CV_Tianyue_Cong.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button accent-button"
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
        See academic CV for full list of experience
      </a>
    </div>
    <ExperienceSection data={work} />
  </article>
);

const ExperiencePage = () => (
  <Main
    title="Experience"
    description="Sam Cong's selected research experience."
  >
    <ExperienceArticle />
  </Main>
);

export default ExperiencePage;
