import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import dayjs from 'dayjs';

import Main from '../layouts/Main';
import data from '../data/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const post = data.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Main title={post.title} description={post.excerpt}>
      <article className="post" id="blog-post">
        <header>
          <div className="title">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <time className="published">
              {dayjs(post.date).format('MMMM YYYY')}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {/* <div className="blog-featured-image">
          <img
            src={`${process.env.PUBLIC_URL}${post.image}`}
            alt={post.title}
            style={{ width: '100%', height: 'auto' }}
          />
        </div> */}

        <div className="blog-narrative" style={{ marginBottom: '2rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
          {post.content}
        </div>

        {/* Photo Slideshow Embedded from Google Slides */}
        <div className="blog-content">
          <h3>Photo Slideshow</h3>

          {/* View Photo Slideshow Button */}
          {/* <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <p>Click below to view the full photo slideshow presentation:</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button large"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#0066cc',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              🖼️ View Photo Slideshow
            </a>
          </div> */}

          <div style={{ margin: '1rem auto', textAlign: 'center' }}>
            <iframe
              src={post.embed_url}
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              title={`${post.title} Slideshow`}
              style={{
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                margin: 0,
                padding: 0,
                background: 'white',
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="blog-navigation" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/blog" className="button">← Back to Blog</Link>
        </div>
      </article>
    </Main>
  );
};

export default BlogPost;
