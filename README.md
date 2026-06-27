# Personal Website

Welcome to my [personal website](https://cty20010831.github.io/personal_site/)! This is an [MIT licensed](https://github.com/mldangelo/personal-site/blob/main/LICENSE) React-based Jamstack application. It offers a simple interface, easy modifications, static export capabilities, and free automatic deployments via [GitHub Pages](https://pages.github.com/).

## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!

## 🛠 Adapting this Project

Want to create your own personal website based on this project? You can set it up in as little as 30 minutes! Follow the setup instructions below and check out the **[detailed guide and checklist](./docs/adapting-guide.md)** on adapting this project to your needs. If you encounter any challenges, don't hesitate to contact me through an issue or email at [help@mldangelo.com](mailto:help@mldangelo.com).

## 🤝 Contributing

Your contributions are warmly welcomed! If you wish to contribute, please review the [design goals](./docs/design-goals.md), [roadmap](./docs/roadmap.md), and [contributing guidelines](./docs/contributing.md). For any bugs or suggestions, you can reach out via email, submit a pull request (I'd be happy to get you a coffee as a thank-you!), or open an issue.

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v16. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## 🚀 Setup and Running

1. Clone the repository:

   ```bash
   git clone git://github.com/mldangelo/personal-site.git
   cd personal-site
   ```

2. (Optional) Ensure you're on Node v16 or higher:

   ```bash
   # Install nvm (make sure to fetch the latest version)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

   # Install Node.js
   nvm install
   node --version
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## 🚢 Deploying

The site deploys to GitHub Pages through GitHub Actions. The active deployment
workflow is `.github/workflows/pages.yml` (`Deploy GitHub Pages`).

When changes are pushed to `main`, the workflow:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Uses the GitHub runner's Chrome executable for `react-snap`.
4. Runs `npm run predeploy`, which cleans stale prerendered files, builds the
   CRA app, and statically renders configured routes into `build/`.
5. Uploads `build/` as a GitHub Pages artifact.
6. Publishes the artifact to:

```text
https://cty20010831.github.io/personal_site/
```

The usual deployment path is therefore just:

```bash
git push origin main
```

GitHub Pages should be configured under `Settings` → `Pages` →
`Build and deployment` → `Source: GitHub Actions`.

### Archived local `gh-pages` deployment

Before the GitHub Actions workflow was added, deployment was done locally with
the `gh-pages` package. That path remains in `package.json` as a manual fallback:

```bash
npm run deploy
```

That command runs `npm run predeploy` and then publishes `build/` to the
repository's `gh-pages` branch. Prefer the GitHub Actions workflow for normal
updates; use the local command only if the Actions path needs a manual fallback.

This [website](https://create-react-app.dev/docs/deployment/#github-pages) provides useful information on how to deploy the webpage to CDN. 

## 🙌 Acknowledgements

- Initial template from [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).
- Special thanks to [@typpo](https://github.com/typpo) for tirelessly answering all of my node.js and react questions.
- Kudos to [@notrueblood](https://github.com/notrueblood)[<sup>[1]</sup>](https://github.com/mldangelo/personal-site/pull/218) and [@sjhsieh](https://github.com/sjhsieh)[<sup>[2]</sup>](https://github.com/mldangelo/personal-site/issues/168) for their constructive feedback.

## Project Directory Organization

```text
.
├── .github/                         # GitHub Actions and repository automation
├── docs/                            # Project notes and adaptation documentation
├── public/                          # Static assets served directly by the app
│   ├── images/
│   │   ├── about/                   # About-page research/theme images
│   │   ├── blog/                    # Blog post folders; each post uses cover.JPG plus gallery photos
│   │   ├── favicon/                 # Browser and mobile favicon assets
│   │   ├── institutions/            # Logos for education and research experience cards
│   │   ├── photography/             # Photography gallery images grouped by country
│   │   └── me.jpg                   # Home/profile headshot
│   └── Academic_CV_Tianyue_Cong.pdf # Public CV PDF
├── scripts/
│   └── generate-blog-photos.js      # Builds the blog slideshow photo manifest before start/build
├── src/                             # React application source code
│   ├── __tests__/                   # Jest tests for the React app
│   ├── components/
│   │   ├── Blog/
│   │   │   └── BlogCell.js          # Blog list card
│   │   ├── Contact/
│   │   │   ├── ContactIcons.js      # Contact/social icon rendering
│   │   │   └── EmailLink.js         # Mailto contact link helper
│   │   ├── Publications/
│   │   │   ├── PublicationAuthors.js # Sam author-name highlighting
│   │   │   └── PublicationCard.js   # Publication list card
│   │   ├── Template/
│   │   │   ├── Analytics.js         # Google Analytics hook
│   │   │   ├── Hamburger.js         # Mobile navigation toggle
│   │   │   ├── Navigation.js        # Header navigation from route data
│   │   │   └── ScrollToTop.js       # Scroll reset on route changes
│   │   ├── Education.js             # Home education timeline/cards
│   │   ├── Experience.js            # Experience timeline/cards
│   │   └── Skills.js                # Grouped skills chart/cards
│   ├── data/                        # Editable website content and structured data
│   │   ├── about.md                 # About page markdown content
│   │   ├── blog.js                  # Blog post metadata
│   │   ├── blogPhotos.generated.js  # Generated blog slideshow photo manifest
│   │   ├── contact.js               # Contact and social links
│   │   ├── degrees.js               # Education data
│   │   ├── life.md                  # Life page markdown content
│   │   ├── news.js                  # Home page news items
│   │   ├── photography.js           # Photography page image metadata
│   │   ├── publications.js          # Publication metadata and abstracts
│   │   ├── routes.js                # Visible navigation labels and paths
│   │   ├── skills.js                # Skills data
│   │   └── work.js                  # Selected research experience data
│   ├── layouts/
│   │   └── Main.js                  # Shared page shell, Helmet metadata, navigation, footer
│   ├── pages/
│   │   ├── Index.js                 # Home: profile, contact icons, CV button, education, news
│   │   ├── About.js                 # About page from about.md
│   │   ├── Experience.js            # Experience route using work.js and Experience component
│   │   ├── Skills.js                # Skills route using skills.js and Skills component
│   │   ├── Publications.js          # Publication list, filters, cards
│   │   ├── PublicationPost.js       # Publication detail route
│   │   ├── Blog.js                  # Blog list, tag filters, cards
│   │   ├── BlogPost.js              # Blog detail route and photo slideshow
│   │   ├── Contact.js               # Contact page cards
│   │   ├── Life.js                  # Life page from life.md
│   │   ├── Photography.js           # Photography gallery route
│   │   └── NotFound.js              # 404 fallback
│   ├── static/css/
│   │   ├── base/                    # Base page and typography rules
│   │   ├── components/              # Shared component styles
│   │   ├── layout/                  # Header, footer, wrapper, main layout styles
│   │   ├── libs/                    # SCSS variables, functions, mixins, breakpoints
│   │   ├── pages/                   # Page-specific styles for academic/contact/etc.
│   │   ├── blog.scss                # Blog list/detail styles
│   │   └── main.scss                # Global SCSS entry point
│   ├── App.js                       # Route definitions and top-level router setup
│   └── index.js                     # Application entry point
├── .eslintrc.js                     # ESLint configuration
├── jest.config.js                   # Jest configuration
├── package.json                     # Project metadata, dependencies, and npm scripts
└── README.md                        # Project overview, setup, deployment, and notes
```

Section source map:

- Home (`/`): `src/pages/Index.js`, with profile image
  `public/images/me.jpg`, contact links from `src/data/contact.js`, education
  from `src/data/degrees.js`, news from `src/data/news.js`, and CV PDF from
  `public/Academic_CV_Tianyue_Cong.pdf`.
- About (`/about`): `src/pages/About.js`, markdown in `src/data/about.md`, and
  supporting images in `public/images/about/`.
- Experience (`/experience`): `src/pages/Experience.js`,
  `src/components/Experience.js`, research data in `src/data/work.js`, and
  institution logos in `public/images/institutions/`.
- Skills (`/skills`): `src/pages/Skills.js`, `src/components/Skills.js`, and
  grouped skill data in `src/data/skills.js`.
- Publications (`/publications`, `/publications/:slug`):
  `src/pages/Publications.js`, `src/pages/PublicationPost.js`,
  `src/components/Publications/`, and publication records in
  `src/data/publications.js`.
- Blogs (`/blogs`, `/blogs/:slug`, plus legacy `/blog` aliases):
  `src/pages/Blog.js`, `src/pages/BlogPost.js`, `src/components/Blog/`,
  metadata in `src/data/blog.js`, generated slideshow data in
  `src/data/blogPhotos.generated.js`, and photos in `public/images/blog/`.
- Contact (`/contact`): `src/pages/Contact.js`, `src/components/Contact/`, and
  links in `src/data/contact.js`.
- Life (`/life`): `src/pages/Life.js` and markdown in `src/data/life.md`.
- Photography (`/photography`): `src/pages/Photography.js`, image metadata in
  `src/data/photography.js`, and gallery assets in
  `public/images/photography/`.
