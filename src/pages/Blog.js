import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import BlogCell from '../components/Blog/BlogCell';
import data from '../data/blog';

const Blog = () => (
  <Main title="Blog" description="Read Sam Cong's latest thoughts and insights.">
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2>
            <Link to="/blog">Blog</Link>
          </h2>
          <p>
            In this section, I will leave some blogs related to academic events, vacation travel,
            and basically anything that carries personal importance. Hope you enjoy! 🥳
          </p>
        </div>
      </header>
      {data.map((post) => (
        <BlogCell data={post} key={post.slug} />
      ))}
    </article>
  </Main>
);

export default Blog;
