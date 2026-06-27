import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

export const LifeSection = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/life.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []);

  return (
    <article className="post markdown" id="life">
      <header>
        <div className="title">
          <h2>
            <Link to="/life">Life</Link>
          </h2>
        </div>
      </header>
      <div style={{ lineHeight: '1.6', marginBottom: '2.5em' }}>
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

const Life = () => (
  <Main title="Life" description="Personal notes, travel, and interests by Sam Cong.">
    <LifeSection />
  </Main>
);

export default Life;
