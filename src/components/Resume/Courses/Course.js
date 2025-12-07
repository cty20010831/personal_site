import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-item">
    <span className="course-title">{data.title}</span>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  }).isRequired,
};

export default Course;
