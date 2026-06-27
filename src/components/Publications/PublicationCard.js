import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PublicationAuthors from './PublicationAuthors';

const PublicationCard = ({ publication }) => (
  <article className="publication-card">
    <header>
      <h3>
        <Link to={`/publications/${publication.slug}`}>{publication.title}</Link>
      </h3>
      <p className="publication-authors">
        <PublicationAuthors authors={publication.authors} />
      </p>
      <p className="publication-citation">{publication.citation}</p>
    </header>
    <div className="publication-meta">
      <div className="publication-meta-row publication-meta-topics">
        {publication.topics.map((topic) => (
          <span className="publication-tag-topic" key={topic}>{topic}</span>
        ))}
      </div>
      <div className="publication-meta-row">
        <span className="publication-tag-year">{publication.year}</span>
        <span className="publication-tag-type">{publication.type}</span>
      </div>
    </div>
  </article>
);

PublicationCard.propTypes = {
  publication: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    citation: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicationCard;
