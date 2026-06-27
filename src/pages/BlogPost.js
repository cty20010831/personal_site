import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, Navigate } from 'react-router-dom';
import dayjs from 'dayjs';

import Main from '../layouts/Main';
import data from '../data/blog';

const PhotoSlideshow = ({ photos, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  if (photos.length === 0) return null;

  const progress = photos.length > 1 ? (activeIndex / (photos.length - 1)) * 100 : 100;

  return (
    <div className="blog-photo-slideshow">
      <img
        src={`${process.env.PUBLIC_URL}${photos[activeIndex]}`}
        alt={`${title} ${activeIndex + 1}`}
      />
      {photos.length > 1 && (
        <div className="blog-slideshow-progress" aria-label="Photo slideshow progress">
          <span>1</span>
          <div className="blog-progress-track">
            <div className="blog-progress-fill" style={{ width: `${progress}%` }} />
            <div className="blog-progress-arrow" style={{ left: `${progress}%` }} />
          </div>
          <span>{photos.length}</span>
        </div>
      )}
    </div>
  );
};

PhotoSlideshow.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = data.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const photos = post.photos || [];

  return (
    <Main title={post.title} description={post.excerpt}>
      <article className="post" id="blog-post">
        <div className="blog-top-link">
          <Link to="/blogs">Back to Blogs</Link>
        </div>
        <header>
          <div className="title">
            <h2>
              <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
            </h2>
            <time className="published">
              {dayjs(post.date).format('MMMM YYYY')}
            </time>
          </div>
        </header>

        <div className="blog-detail-layout">
          {photos.length > 0 && (
            <div className="blog-content">
              <PhotoSlideshow photos={photos} title={post.title} />
            </div>
          )}
          <div className="blog-narrative-card">
            <div className="blog-narrative">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </Main>
  );
};

export default BlogPost;
