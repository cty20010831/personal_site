import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Sam Cong">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
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
    </Main>
  );
};

export default About;
