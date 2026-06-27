import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import SkillsSection from '../components/Skills';

import { skills, categories } from '../data/skills';

export const SkillsArticle = () => (
  <article className="post academic-page" id="skills">
    <header>
      <div className="title">
        <h2>
          <Link to="/skills">Skills</Link>
        </h2>
      </div>
    </header>
    <SkillsSection skills={skills} categories={categories} />
  </article>
);

const SkillsPage = () => (
  <Main
    title="Skills"
    description="Sam Cong's skills."
  >
    <SkillsArticle />
  </Main>
);

export default SkillsPage;
