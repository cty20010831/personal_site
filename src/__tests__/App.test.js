/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  // mocks the fetch API used on the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  // mocks the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();
  window.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  let container;
  let root;

  beforeEach(async () => {
    window.history.pushState({}, '', '/');
    container = document.createElement('div');
    document.body.appendChild(container);
    root = ReactDOM.createRoot(container);
    await act(async () => {
      await root.render(<App />);
    });
  });

  afterEach(async () => {
    await act(async () => {
      root.unmount();
    });
    document.body.removeChild(container);
    container = null;
    root = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Sam Cong');
  });

  it('can navigate to /about', async () => {
    expect.assertions(4);
    const aboutLink = document.querySelector(
      '#header > nav > ul > li:nth-child(1) > a',
    );
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(document.querySelector('#about')).toBeInTheDocument();
  });

  it('can navigate to /experience', async () => {
    expect.assertions(3);
    const experienceLink = document.querySelector(
      '#header > nav > ul > li:nth-child(2) > a',
    );
    expect(experienceLink).toBeInTheDocument();
    await act(async () => {
      await experienceLink.click();
    });
    expect(document.title).toContain('Experience |');
    expect(window.location.pathname).toBe('/experience');
  });

  it('can navigate to /skills', async () => {
    expect.assertions(3);
    const skillsLink = document.querySelector(
      '#header > nav > ul > li:nth-child(3) > a',
    );
    expect(skillsLink).toBeInTheDocument();
    await act(async () => {
      await skillsLink.click();
    });
    expect(document.title).toContain('Skills |');
    expect(window.location.pathname).toBe('/skills');
  });

  it('can navigate to /publications', async () => {
    expect.assertions(3);
    const publicationsLink = document.querySelector(
      '#header > nav > ul > li:nth-child(4) > a',
    );
    expect(publicationsLink).toBeInTheDocument();
    await act(async () => {
      await publicationsLink.click();
    });
    expect(document.title).toContain('Publications |');
    expect(window.location.pathname).toBe('/publications');
  });

  it('does not route /projects', async () => {
    expect.assertions(3);
    await act(async () => {
      root.unmount();
      window.history.pushState({}, '', '/projects');
      root = ReactDOM.createRoot(container);
      await root.render(<App />);
    });
    expect(document.querySelector('.not-found')).toBeInTheDocument();
    expect(document.querySelector('.not-found h1')).toHaveTextContent('Page Not Found');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /blogs', async () => {
    expect.assertions(3);
    const blogsLink = document.querySelector(
      '#header > nav > ul > li:nth-child(5) > a',
    );
    expect(blogsLink).toBeInTheDocument();
    await act(async () => {
      await blogsLink.click();
    });
    expect(document.title).toContain('Blogs |');
    expect(window.location.pathname).toBe('/blogs');
  });

  it('shows the Misc blog filter and UChicago Convocation tag', async () => {
    expect.assertions(3);
    const blogsLink = document.querySelector(
      '#header > nav > ul > li:nth-child(5) > a',
    );
    await act(async () => {
      await blogsLink.click();
    });
    expect(document.querySelector('.blog-filter-row')).toHaveTextContent('Misc');
    const uchicagoCard = [...document.querySelectorAll('.blog-simple-card')]
      .find((card) => card.textContent.includes('UChicago Convocation'));
    expect(uchicagoCard).toBeInTheDocument();
    expect(uchicagoCard.querySelector('.blog-card-tags')).toHaveTextContent('Misc');
  });

  it('can navigate to /contact', async () => {
    expect.assertions(3);
    const contactLink = document.querySelector(
      '#header > nav > ul > li:nth-child(6) > a',
    );
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });

  it('can navigate to /life as the second-to-last nav item', async () => {
    expect.assertions(5);
    const navLinks = document.querySelectorAll('#header > nav > ul > li > a');
    const lifeLink = navLinks[navLinks.length - 2];
    const photographyLink = navLinks[navLinks.length - 1];
    expect(lifeLink).toBeInTheDocument();
    expect(lifeLink).toHaveTextContent('Life');
    expect(photographyLink).toHaveTextContent('Photography');
    await act(async () => {
      await lifeLink.click();
    });
    expect(document.title).toContain('Life |');
    expect(window.location.pathname).toBe('/life');
  });

  it('can navigate to /photography as the last nav item', async () => {
    expect.assertions(5);
    const navLinks = document.querySelectorAll('#header > nav > ul > li > a');
    const photographyLink = navLinks[navLinks.length - 1];
    expect(photographyLink).toBeInTheDocument();
    expect(photographyLink).toHaveTextContent('Photography');
    await act(async () => {
      await photographyLink.click();
    });
    expect(document.title).toContain('Photography |');
    expect(window.location.pathname).toBe('/photography');
    expect(document.querySelector('#photography .photo-grid')).toBeInTheDocument();
  });

  it('keeps blog detail routes separate from the landing page', async () => {
    expect.assertions(3);
    await act(async () => {
      root.unmount();
      window.history.pushState({}, '', '/blogs/uchicago_convocation');
      root = ReactDOM.createRoot(container);
      await root.render(<App />);
    });
    expect(document.title).toContain('UChicago Convocation |');
    expect(document.querySelector('#blog-post')).toBeInTheDocument();
    expect(document.querySelector('#index')).not.toBeInTheDocument();
  });

  it('does not route /beyond-research', async () => {
    expect.assertions(3);
    await act(async () => {
      root.unmount();
      window.history.pushState({}, '', '/beyond-research');
      root = ReactDOM.createRoot(container);
      await root.render(<App />);
    });
    expect(document.querySelector('.not-found')).toBeInTheDocument();
    expect(document.querySelector('.not-found h1')).toHaveTextContent('Page Not Found');
    expect(window.location.pathname).toBe('/beyond-research');
  });
});
