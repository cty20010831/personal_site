import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const BlogCell = ({ data }) => (
  <div className="blog-simple-card">
    <header className="blog-header">
      <h2>
        <Link to={`/blog/${data.slug}`}>{data.title}</Link>
      </h2>
      <time className="blog-date">
        {dayjs(data.date).format('MMMM YYYY')}
      </time>
      <p className="blog-excerpt">{data.excerpt}</p>
    </header>
    <Link to={`/blog/${data.slug}`} className="blog-image-link">
      <div className="blog-image-container">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} className="blog-simple-image" />
        <div className="blog-hover-overlay">
          <div className="blog-overlay-content">
            <h3 className="blog-overlay-title">{data.title}</h3>
            <p className="blog-overlay-subtitle">Click to see more! 😁</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

BlogCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCell;
