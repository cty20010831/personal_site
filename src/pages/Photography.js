import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import photos from '../data/photography';

export const PhotographySection = () => (
  <article className="post" id="photography">
    <header>
      <div className="title">
        <h2>
          <Link to="/photography">Photography</Link>
        </h2>
      </div>
    </header>
    <div className="photo-grid">
      {photos.map(({
        src, alt, location, date,
      }) => (
        <div className="photo-cell" key={src}>
          <div className="photo-image-wrap">
            <img src={src} alt={alt} loading="lazy" />
          </div>
          <div className="photo-caption">
            <span className="photo-location">{location}</span>
            <span className="photo-date">{date}</span>
          </div>
        </div>
      ))}
    </div>
  </article>
);

const Photography = () => (
  <Main title="Photography" description="Photos by Sam Cong.">
    <PhotographySection />
  </Main>
);

export default Photography;
