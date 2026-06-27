import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const formatDateRange = (startDate, endDate) => (
  `${dayjs(startDate).format('MMM YYYY')} \u2013 ${
    endDate ? dayjs(endDate).format('MMM YYYY') : 'Present'
  }`
);

const LocationIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const GraduationIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3.01 3.9 3.01 5L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
);

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="experience-timeline">
      {data.map((job) => (
        <article className="timeline-item" key={`${job.lab}-${job.position}`}>
          <div className="timeline-grid">

            <div className="timeline-card timeline-lab-card">
              <h4>
                {job.labUrl ? (
                  <a href={job.labUrl} target="_blank" rel="noopener noreferrer">
                    {job.lab}
                  </a>
                ) : (
                  job.lab
                )}
              </h4>
              <h5 className="timeline-position">{job.position}</h5>
              <div className="timeline-lab-logo">
                <img src={job.logo} alt={job.lab} />
              </div>
              <div className="timeline-badges">
                <a
                  className="timeline-university-badge"
                  href={job.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GraduationIcon />
                  {job.university}
                </a>
                <div className="timeline-location-badge">
                  <LocationIcon />
                  {job.location}
                </div>
              </div>
            </div>

            <div className="timeline-center">
              <div className="timeline-node" />
            </div>

            <div className="timeline-right">
              <div className="timeline-date-badge">
                <CalendarIcon />
                {formatDateRange(job.startDate, job.endDate)}
              </div>
              <div className="timeline-card timeline-highlight-card">
                <p className="timeline-responsibilities-label">Key Responsibilities</p>
                <ul className="timeline-bullets">
                  {job.highlights.map((h, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </article>
      ))}
    </div>
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      lab: PropTypes.string,
      university: PropTypes.string,
      position: PropTypes.string,
      labUrl: PropTypes.string,
      schoolUrl: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
      logo: PropTypes.string,
      location: PropTypes.string,
    }),
  ),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
