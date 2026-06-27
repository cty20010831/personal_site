import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import BlogCell from '../components/Blog/BlogCell';
import data from '../data/blog';

export const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const posts = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  const tags = useMemo(
    () => [...new Set(data.flatMap((post) => post.tags))].sort(),
    [],
  );
  const filteredPosts = activeFilter === 'All'
    ? posts
    : posts.filter((post) => post.tags.includes(activeFilter));

  const renderFilter = (label, category = 'all') => (
    <button
      className={`blog-filter blog-filter-${category} ${
        activeFilter === label ? 'blog-filter-active' : ''
      }`}
      key={label}
      type="button"
      onClick={() => setActiveFilter(label)}
    >
      {label}
    </button>
  );

  return (
    <article className="post" id="blogs">
      <header>
        <div className="title">
          <h2>
            <Link to="/blogs">Blogs</Link>
          </h2>
        </div>
      </header>
      <p className="blog-tagline">
        Field notes from the lab, the road, and everything in between &mdash; academic
        conferences, research reflections, travel diaries, and whatever else feels worth
        writing down. Hope you enjoy!
      </p>
      <div className="blog-filters">
        <div className="blog-filter-group blog-filter-reset">
          {renderFilter('All')}
        </div>
        <div className="blog-filter-group blog-filter-group-tag">
          <h3>Tag</h3>
          <div className="blog-filter-row">
            {tags.map((tag) => renderFilter(tag, 'tag'))}
          </div>
        </div>
      </div>
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCell data={post} key={post.slug} />
        ))}
      </div>
    </article>
  );
};

const Blog = () => (
  <Main title="Blogs" description="Read Sam Cong's latest thoughts and insights.">
    <BlogSection />
  </Main>
);

export default Blog;
