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
    name: 'Division of Digital Psychiatry, Beth Israel Deaconess Medical Center (Harvard Medical School)',
    position: 'Research Assistant (Principal Investigator: John Torous)',
    url: 'https://www.digitalpsych.org/',
    startDate: '2025-07-01',
    summary: '',
    highlights: [
      'Lead multimodal research projects integrating mobile health technologies, neuroimaging, and advanced statistical modeling related to the AMP Schizophrenia (SCZ) program.',
      'Primary focus on mental health biomarkers and environmental health, utilizing GPS tracking, smartphone sensors, ecological momentary assessment, and Bayesian modeling approaches to examine stress responses, circadian patterns, social functioning in psychosis, and sleep estimation.',
    ],
  },
  {
    name: 'Motivated Learning and Memory Laboratory, McLean Hospital (Harvard Medical School)',
    position: 'Research Assistant (Principal Investigator: Dr. Daniel Dillon)',
    url: 'https://cdasr.mclean.harvard.edu/mlml/',
    startDate: '2025-07-01',
    summary: '',
    highlights: [
      'Conduct ROI-based fMRI analyses examining striatal reward responses in depression, integrating neuroimaging data with computational modeling (Reinforcement Learning Drift Diffusion Model) to identify neural-behavioral markers of reward dysfunction.',
    ],
  },
  {
    name: 'Laboratory of Neural Computation and Cognition, Brown University',
    position: 'Research Assistant (Principal Investigator: Dr. Michael Frank)',
    url: 'https://www.lnccbrown.com/',
    startDate: '2024-06-01',
    summary: '',
    highlights: [
      'Contribute to longitudinal study predicting suicidal ideation trajectories in adolescents using computational measures of inhibitory control.',
      'Develop comprehensive Hierarchical Bayesian modeling pipeline in PyMC for stop signal task analysis, including likelihood function definition, NUTS sampling, and model validation.',
      'Integrate models into HSSM package for empirical data analysis (collaboration with Dr. Richard Liu at Harvard Medical School).',
    ],
  },
  {
    name: 'Wu Lab of Social Decision-Making, Icahn School of Medicine at Mount Sinai',
    position: 'Summer Research Assistant (Principal Investigator: Dr. Herbert Wu)',
    url: 'https://www.wulab.bio/',
    startDate: '2024-06-01',
    endDate: '2024-12-31',
    summary: '',
    highlights: [
      'Contributed to artificial neural network project modeling delayed match-to-sample task behavior.',
      'Updated legacy RNN architectures to modern TensorFlow, implemented biologically-constrained networks following Dale Principle using both Column Excitation-Inhibition and separate excitatory/inhibitory population approaches.',
    ],
  },
  {
    name: 'Bakkour Memory and Decision Lab, University of Chicago ',
    position: 'Research Assistant (Principal Investigator: Dr. Akram Bakkour)',
    url: 'https://bakkourlab.uchicago.edu/',
    startDate: '2023-09-01',
    endDate: '2025-05-31',
    summary: '',
    highlights: [
      'Contributed to research on feature-based representation and generalizable predictive knowledge using robot drawing task data.',
      'Developed scalable deep learning pipeline with CNN models for HPC deployment, implementing end-to-end data preprocessing, analysis, and visualization workflows using TensorFlow and Scikit-Learn.',
    ],
  },
  {
    name: 'STAR Lab, Southern University of Science and Technology ',
    position: 'Research Assistant (Principal Investigator: Dr. Jinchu Hu)',
    url: '',
    startDate: '2023-06-01',
    endDate: '2024-05-31',
    summary: '',
    highlights: [
      'Coded the early version of STAR lab website, including introduction of lab research interests, published works, description of team members, and ongoing projects.',
      'Built 12 reinforcement models (variants of The Rescorla–Wagner and Pearce–Hall learning models) studying reward reversal learning among patients with major depressive disorder.',
      'Performed Hierarchical Bayesian Modeling analysis on the effect of oxytocin on fear reversal among mentally healthy participants',
    ],
  },
  {
    name: 'Dr. Zhicheng Lin’s Lab, The Chinese University of Hong Kong (Shenzhen)',
    position: 'Research Assistant (Principal Investigator: Dr. Zhicheng Lin)',
    url: 'https://psy.ustc.edu.cn/2024/0116/c27895a628502/page.htm',
    startDate: '2022-03-01',
    endDate: '2023-05-31',
    summary: '',
    highlights: [
      'Contributed to metascience study examining psychological research patterns and development.',
      'Conducted systematic coding of authorship characteristics and sample demographics from leading psychology journals (APA/APS).',
      'Analyzeed racial composition of authors and editorial boards using diversity metrics.',
    ],
  },
  {
    name: 'Dr. Shi Yu’s Lab, The Chinese University of Hong Kong (Shenzhen)',
    position: 'Research Assistant (Principal Investigator: Dr. Shi Yu)',
    url: 'https://hss.cuhk.edu.cn/en/teacher/470',
    startDate: '2021-09-01',
    endDate: '2023-05-31',
    summary: '',
    highlights: [
      'Contributed to longitudinal study of Chinese adolescent motivation and meaning of life.',
      'Conducted scale translation, questionnaire design, data quality assurance',
    ],
  },
];

export default work;
