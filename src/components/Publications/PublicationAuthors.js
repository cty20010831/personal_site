import React from 'react';
import PropTypes from 'prop-types';

const highlightedAuthors = ['Cong, T.', 'Cong, S.'];
const highlightedAuthorPattern = new RegExp(
  `(${highlightedAuthors.map((author) => author.replace('.', '\\.')).join('|')})`,
  'g',
);

const PublicationAuthors = ({ authors }) => {
  const authorParts = authors.split(highlightedAuthorPattern);

  return (
    <>
      {authorParts.map((part) => (
        highlightedAuthors.includes(part) ? (
          <strong key={part}>{part}</strong>
        ) : (
          part
        )
      ))}
    </>
  );
};

PublicationAuthors.propTypes = {
  authors: PropTypes.string.isRequired,
};

export default PublicationAuthors;
