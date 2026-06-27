import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

export const AboutSection = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  return (
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About Me</Link>
          </h2>
        </div>
      </header>
      <div style={{ lineHeight: '1.6', marginBottom: '20px' }}>
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  style: {
                    marginBottom: '1.5em',
                  },
                },
              },
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </article>
  );
};

const About = () => (
  <Main title="About" description="Learn about Sam Cong">
    <AboutSection />
  </Main>
);

export default About;
