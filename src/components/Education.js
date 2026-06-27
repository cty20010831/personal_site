import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <div className="degree-node">
      <img src={data.logo} alt={`${data.school} logo`} />
    </div>
    <div className="degree-content">
      <h4 className="degree-line">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.degree}
        </a>
        <span className="degree-separator">·</span>
        <strong>{data.school}</strong>
      </h4>
      <p className="degree-year">{data.year}</p>
    </div>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      logo: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
