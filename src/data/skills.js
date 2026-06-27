const skills = [
  // Programming Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages'],
    iconName: 'SiPython',
  },
  {
    title: 'R',
    competency: 5,
    category: ['Programming Languages'],
    iconName: 'SiR',
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Programming Languages'],
    iconName: 'SiGit',
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Programming Languages'],
    iconName: 'FaCode',
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Programming Languages'],
    iconName: 'FaDatabase',
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Programming Languages'],
    iconName: 'SiHtml5',
  },
  {
    title: 'CSS',
    competency: 3,
    category: ['Programming Languages'],
    iconName: 'SiCss',
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Programming Languages'],
    iconName: 'SiJavascript',
  },
  {
    title: 'Julia',
    competency: 2,
    category: ['Programming Languages'],
    iconName: 'SiJulia',
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Programming Languages'],
    iconName: 'SiCplusplus',
  },
  // Machine & Deep Learning
  {
    title: 'TensorFlow + Keras',
    competency: 4,
    category: ['Machine & Deep Learning'],
    iconName: 'SiTensorflow',
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine & Deep Learning'],
    iconName: 'SiPytorch',
  },
  {
    title: 'scikit-learn',
    competency: 4,
    category: ['Machine & Deep Learning'],
    iconName: 'SiScikitlearn',
  },
  {
    title: 'Gensim',
    competency: 3,
    category: ['Machine & Deep Learning'],
    iconName: 'FaBook',
  },
  {
    title: 'NLTK',
    competency: 3,
    category: ['Machine & Deep Learning'],
    iconName: 'FaBook',
  },
  {
    title: 'spaCy',
    competency: 3,
    category: ['Machine & Deep Learning'],
    iconName: 'SiSpacy',
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Machine & Deep Learning'],
    iconName: 'SiOpencv',
  },
  // Neural Signal Analysis
  {
    title: 'fMRIPrep',
    competency: 4,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  {
    title: 'FSL',
    competency: 4,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  {
    title: 'SPM',
    competency: 3,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  {
    title: 'FreeSurfer',
    competency: 3,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  {
    title: 'Nilearn',
    competency: 3,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  {
    title: 'Nipype',
    competency: 3,
    category: ['Neural Signal Analysis'],
    iconName: 'FaBrain',
  },
  // Agentic AI & LLM Workflows
  {
    title: 'Multi-Agent Workflow Design',
    competency: 5,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'FaRobot',
  },
  {
    title: 'Agent Skill Design',
    competency: 5,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'FaRobot',
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'FaMagic',
  },
  {
    title: 'Model Context Protocol',
    competency: 4,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'FaNetworkWired',
  },
  {
    title: 'Retrieval-Augmented Generation',
    competency: 3,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'FaDatabase',
  },
  {
    title: 'LangChain',
    competency: 3,
    category: ['Agentic AI & LLM Workflows'],
    iconName: 'SiLangchain',
  },
  // Data Science Libraries
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science Libraries'],
    iconName: 'SiPandas',
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science Libraries'],
    iconName: 'SiNumpy',
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science Libraries'],
    iconName: 'SiJupyter',
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science Libraries'],
    iconName: 'FaChartBar',
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Data Science Libraries'],
    iconName: 'FaChartLine',
  },
  {
    title: 'Scipy',
    competency: 4,
    category: ['Data Science Libraries'],
    iconName: 'SiScipy',
  },
  // Big Data & HPC
  {
    title: 'Cython',
    competency: 4,
    category: ['Big Data & HPC'],
    iconName: 'FaCode',
  },
  {
    title: 'Numba',
    competency: 3,
    category: ['Big Data & HPC'],
    iconName: 'FaRocket',
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Big Data & HPC'],
    iconName: 'SiApachespark',
  },
  {
    title: 'Dask',
    competency: 3,
    category: ['Big Data & HPC'],
    iconName: 'SiDask',
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Big Data & HPC'],
    iconName: 'FaAws',
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#2ca58d',
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
