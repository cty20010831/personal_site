const skills = [
  // Programming Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Programming Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'SQLite',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'Julia',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Programming Languages'],
  },
  // AI & Machine Learning Tools
  {
    title: 'TensorFlow + Keras',
    competency: 4,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'scikit-learn',
    competency: 4,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'Genism',
    competency: 3,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'NLTK',
    competency: 3,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'spaCy',
    competency: 3,
    category: ['AI & Machine Learning Tools'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['AI & Machine Learning Tools'],
  },
  // Data Science Libraries
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science Libraries'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science Libraries'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science Libraries'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science Libraries'],
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Data Science Libraries'],
  },
  {
    title: 'Scipy',
    competency: 4,
    category: ['Data Science Libraries'],
  },
  // Big Data, High Performance Computing, and Cloud Computing
  {
    title: 'Cython',
    competency: 4,
    category: ['Big Data, High Performance Computing, and Cloud Computing'],
  },
  {
    title: 'Numba',
    competency: 3,
    category: ['Big Data, High Performance Computing, and Cloud Computing'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Big Data, High Performance Computing, and Cloud Computing'],
  },
  {
    title: 'Dask',
    competency: 3,
    category: ['Big Data, High Performance Computing, and Cloud Computing'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Big Data, High Performance Computing, and Cloud Computing'],
  },
  // Web Development
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development'],
  },
  // {
  //   title: 'Typescript',
  //   competency: 3,
  //   category: ['Web Development'],
  // },
  {
    title: 'HTML + CSS + Javascript',
    competency: 2,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
