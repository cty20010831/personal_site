import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const BlogCell = ({ data }) => (
  <div className="blog-simple-card">
    <Link to={`/blogs/${data.slug}`} className="blog-image-link">
      <div className="blog-image-container">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} className="blog-simple-image" />
      </div>
    </Link>
    <header className="blog-header">
      <time className="blog-date">
        {dayjs(data.date).format('MMMM YYYY')}
      </time>
      <div className="blog-card-tags">
        {data.tags.map((tag) => (
          <span className="blog-card-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <h2>
        <Link to={`/blogs/${data.slug}`}>{data.title}</Link>
      </h2>
      <p className="blog-excerpt">{data.excerpt}</p>
    </header>
  </div>
);

BlogCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCell;
