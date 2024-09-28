import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import siteStatsMarkdown from '../data/stats/site.md';

const Stats = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Ensure that the markdown content is set correctly as a string
    fetch(siteStatsMarkdown)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <Main
      title="Stats"
      description="Some statistics about Sam Cong and congtianyue233@gmail.com"
    >
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link to="/stats">Stats</Link>
            </h2>
          </div>
        </header>

        {/* Personal Stats */}
        <Personal />

        {/* Render the Markdown content using markdown-to-jsx */}
        <div className="markdown-content">
          <Markdown>{markdownContent}</Markdown>
        </div>
      </article>
    </Main>
  );
};

export default Stats;
