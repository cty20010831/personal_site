import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import PublicationCard from '../components/Publications/PublicationCard';
import publications from '../data/publications';

export const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const years = useMemo(
    () => [
      ...new Set(publications.map((publication) => publication.year)),
    ].sort((a, b) => b.localeCompare(a)),
    [],
  );
  const topics = useMemo(
    () => [
      ...new Set(publications.flatMap((publication) => publication.topics)),
    ].sort(),
    [],
  );
  const types = useMemo(
    () => [
      ...new Set(publications.map((publication) => publication.type)),
    ].sort(),
    [],
  );

  const filteredPublications = activeFilter === 'All'
    ? publications
    : publications.filter((publication) => (
      publication.year === activeFilter
      || publication.topics.includes(activeFilter)
      || publication.type === activeFilter
    ));

  const renderFilter = (label, category = 'all') => (
    <button
      className={`publication-filter publication-filter-${category} ${
        activeFilter === label ? 'publication-filter-active' : ''
      }`}
      key={label}
      type="button"
      onClick={() => setActiveFilter(label)}
    >
      {label}
    </button>
  );

  return (
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2>
            <Link to="/publications">Publications</Link>
          </h2>
        </div>
      </header>

      <div className="publication-filters">
        <div className="publication-filter-group publication-filter-reset">
          {renderFilter('All')}
        </div>
        <div className="publication-filter-group publication-filter-group-topic">
          <h3>Topic</h3>
          <div className="publication-filter-row">
            {topics.map((topic) => renderFilter(topic, 'topic'))}
          </div>
        </div>
        <div className="publication-filter-group publication-filter-group-year">
          <h3>Year</h3>
          <div className="publication-filter-row">
            {years.map((year) => renderFilter(year, 'year'))}
          </div>
        </div>
        <div className="publication-filter-group publication-filter-group-type">
          <h3>Type</h3>
          <div className="publication-filter-row">
            {types.map((type) => renderFilter(type, 'type'))}
          </div>
        </div>
      </div>

      <div className="publication-list">
        {filteredPublications.map((publication) => (
          <PublicationCard publication={publication} key={publication.slug} />
        ))}
      </div>
    </article>
  );
};

const Publications = () => (
  <Main title="Publications" description="Read Sam Cong's publications.">
    <PublicationsSection />
  </Main>
);

export default Publications;
