import React from 'react';
import PropTypes from 'prop-types';

const ResearchInterests = ({ data }) => (
  <div className="research-interests">
    <div className="link-to" id="research-interests" />
    <div className="title" style={{ textAlign: 'center' }}>
      <h3>Research Interests</h3>
    </div>
    <ul className="research-list" style={{ listStyle: 'none', padding: 0 }}>
      {data.map((interest) => (
        <li key={interest.title}>
          <h4>{interest.title}</h4>
          <ul>
            {interest.description.split(',').map((item) => (
              <li key={item.trim()}>{item.trim()}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

ResearchInterests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
};

ResearchInterests.defaultProps = {
  data: [],
};

export default ResearchInterests;
