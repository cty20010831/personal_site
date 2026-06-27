import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:samc010831@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/tianyuecong/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://scholar.google.com/citations?user=z9etVU0AAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  {
    link: 'https://orcid.org/0009-0008-0227-372X',
    label: 'ORCID',
    icon: faOrcid,
  },
  {
    link: 'https://x.com/congtianyue1',
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: 'https://instagram.com/congtianyue',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
