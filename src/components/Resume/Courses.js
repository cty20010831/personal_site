import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses
  .map((course) => (
    <Course
      data={course}
      key={course.title}
    />
  ));

const Courses = ({ data }) => {
  if (Array.isArray(data)) {
    return (
      <div className="courses">
        <div className="link-to" id="courses" />
        <div className="title">
          <h3>Selected Courses</h3>
        </div>
        <ul className="course-list">{getRows(data)}</ul>
      </div>
    );
  }

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Selected Courses</h3>
      </div>
      {Object.entries(data).map(([category, courses]) => (
        <div key={category} className="course-category">
          <h4 className="category-title">{category}</h4>
          <ul className="course-list">{getRows(courses)}</ul>
        </div>
      ))}
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        number: PropTypes.string,
        link: PropTypes.string,
        university: PropTypes.string,
      }),
    ),
    PropTypes.objectOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          number: PropTypes.string,
          link: PropTypes.string,
          university: PropTypes.string,
        }),
      ),
    ),
  ]),
};

Courses.defaultProps = {
  data: {},
};

export default Courses;
