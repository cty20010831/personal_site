import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import Main from '../layouts/Main';
import PublicationAuthors from '../components/Publications/PublicationAuthors';
import publications from '../data/publications';

const PublicationPost = () => {
  const { slug } = useParams();
  const publication = publications.find((item) => item.slug === slug);
  const abstractParagraphs = Array.isArray(publication?.abstract)
    ? publication.abstract
    : [publication?.abstract].filter(Boolean);

  if (!publication) {
    return <Navigate to="/publications" replace />;
  }

  return (
    <Main title={publication.title} description={publication.citation}>
      <article className="post" id="publication-post">
        <header>
          <div className="title">
            <h2>
              <Link to={`/publications/${publication.slug}`}>{publication.title}</Link>
            </h2>
            <p>
              <PublicationAuthors authors={publication.authors} />
            </p>
          </div>
        </header>

        <section className="publication-detail">
          <p className="publication-citation">{publication.citation}</p>
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
          {publication.doiUrl ? (
            <p className="publication-doi">
              DOI:{' '}
              <a href={publication.doiUrl} target="_blank" rel="noopener noreferrer">
                {publication.doi}
              </a>
            </p>
          ) : null}
          {abstractParagraphs.length ? (
            <>
              <h3>Abstract</h3>
              {abstractParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          ) : null}
        </section>

        <div className="publication-navigation">
          <Link to="/publications" className="button">Back to Publications</Link>
        </div>
      </article>
    </Main>
  );
};

export default PublicationPost;
