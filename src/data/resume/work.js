/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Brown University',
    position: 'Summer Research Assistant, Dr. Michael Frank’s Lab',
    url: 'https://www.lnccbrown.com/',
    startDate: '2024-06-01',
    summary: '',
    highlights: [
      'Assist in a computational psychiatry project that generates parameter estimates of inhibitory control as one in- dependent variable to predict suicidal ideation trajectories in teenagers over an 18-month period (in collaboration with Dr. Richard Liu’s lab at Harvard Medical School).',
      'Design a comprehensive pipeline for Hierarchical Bayesian Modeling via PyMC, encompassing data simulation, likelihood definition, model fitting, and model checking.',
      'Define likelihood functions for go, stop-respond, and successful inhibition trials in stop signal task using PyMC.',
      'Apply No-U-Turn Sampler (NUTS; an advanced variant of the Hamiltonian Monte Carlo algorithm) to estimate group-level and subject-level parameters.',
      'Conduct posterior predictive checks, convergence diagnostics, and sensitivity analyses to ensure the robustness and reliability of the model.',
      'Incorporate the PyMC model of the stop signal task into HSSM package before fitting it to empirical data.',
    ],
  },
  {
    name: 'Icahn School of Medicine at Mount Sinai',
    position: 'Summer Research Assistant, Dr. Herbert Wu’s Lab',
    url: 'https://www.wulab.bio/',
    startDate: '2024-06-01',
    summary: '',
    highlights: [
      'Assist in a computational neuroscience project on building artificial neural network (ANN) for the delayed match to sample (DMS) task.',
      'Update the original vanilla multi-layer recurrent neural network (RNN) to the latest version of tensorflow.',
      'Build RNN following Dale’s principle for the DMS task via tensorflow, including Column Excitation-Inhibition approach (constraining entire columns of the weight matrices to be of the equal sign) and Dale’s ANNs approach (ANNs with separate populations of excitatory and inhibitory units).',
    ],
  },
  {
    name: 'University of Chicago',
    position: 'Research Assistant, Dr. Akram Bakkour’s Lab',
    url: 'https://bakkourlab.uchicago.edu/',
    startDate: '2023-09-01',
    summary: '',
    highlights: [
      'Assist in a project on how feature-based representation may facilitate generalizable predictive knowledge.',
      'Implement a scalable deep learning analysis pipeline for feature extraction in the robot drawing task, tailored for upcoming deployment on the Midway3 High Performance Computing Cluster for large dataset analysis.',
      'Employ Tensorflow and Scikit-Learn to construct and validate predictive Convolutional Neural Networks models, streamlining data preprocessing, analysis, and visualization processes.',
    ],
  },
  {
    name: 'Southern University of Science and Technology',
    position: 'Research Assistant, Dr. Jinchu Hu’s Lab',
    url: '',
    startDate: '2023-06-01',
    endDate: '2024-06-01',
    summary: '',
    highlights: [
      'Built the early version of STAR lab website, including introduction of lab research interests, published works, description of team members, and ongoing projects.',
      'Wrote MATLAB and Stan syntax to build 12 reinforcement models (variants of The Rescorla–Wagner and Pearce–Hall learning models) studying reward reversal learning among patients with major depressive disorder.',
      'Conducted parameter recovery, model estimation (including maximum likelihood estimation and Hierarchical Bayesian Modeling), model comparison, and posterior predictive check for the reward reversal learning project.',
      'Performed Hierarchical Bayesian Modeling analysis on the effect of oxytocin on fear reversal among mentally healthy participants, encompassing model fitting (using Pearce–Hall learning model) and group comparison of treatment and gender effects (using highest density interval of group parameter differences).',
    ],
  },
  {
    name: 'The Chinese University of Hong Kong',
    position: 'Research Assistant, Dr. Zhicheng Lin’s Lab',
    url: 'https://psy.ustc.edu.cn/2024/0116/c27895a628502/page.htm',
    startDate: '2022-03-01',
    endDate: '2023-05-31',
    summary: '',
    highlights: [
      'Supported a research project examining the characteristics and development pattern of psychological research through the lens of metascience.',
      'Coded issues from APA and APS (two top psychology journals) over the past few years based on authorship (e.g., number of authors, nations represented) and sample information (e.g., sample size, demographics).',
      'Calculated the Simpson diversity index to determine the racial composition of selected authors and editors from APA and APS using the vegan package in R.',
    ],
  },
  {
    name: 'The Chinese University of Hong Kong',
    position: 'Research Assistant, Dr. Shi Yu’s Lab',
    url: 'https://hss.cuhk.edu.cn/en/teacher/470',
    startDate: '2021-09-01',
    endDate: '2023-05-31',
    summary: '',
    highlights: [
      'Contributed to a longitudinal study investigating Chinese middle school students’ study motivation and mean- ing of life.',
      'Translated scale items measuring authentic inner compass from Chinese to English.',
      'Performed data cleaning to ensure data quality using Excel and SPSS.',
      'Identified careless responses using data screening methods such as long-string index, psychometric synonyms and antonyms, and even-odd consistency via the careless package in R.',
      'Assisted in designing a questionnaire consisting of 14 scales via Credamo to measure meaning of life and related constructs.',
    ],
  },
];

export default work;
