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
    summary: 'Lead multiple digital phenotyping studies on GPS-derived greenspace exposure and mobility metrics, accelerometer-based activity patterns, and sleep quality assessment (investigating their psychiatric relevance using AMP@SCZ and Digital Clinic datasets).',
    highlights: [],
  },
  {
    name: 'Motivated Learning and Memory Laboratory, McLean Hospital (Harvard Medical School)',
    position: 'Research Assistant (Principal Investigator: Dr. Daniel Dillon)',
    url: 'https://cdasr.mclean.harvard.edu/mlml/',
    startDate: '2025-07-01',
    summary: 'Fit Reinforcement Learning Drift Diffusion Model (RLDDM) on Probabilistic Selection Task (PST) behavioral and fMRI data, identifying a selective reduction in positive learning rate with increased anhedonic depression scores.',
    highlights: [],
  },
  {
    name: 'Laboratory of Neural Computation and Cognition, Brown University',
    position: 'Research Assistant (Principal Investigator: Dr. Michael Frank)',
    url: 'https://www.lnccbrown.com/',
    startDate: '2024-06-01',
    summary: 'Design a comprehensive PyMC Hierarchical Bayesian Modeling pipeline for the stop signal task, encompassing forward simulation, likelihood definition, model fitting, and model diagnostics (e.g., convergence checks, parameter recovery, posterior predictive checks).',
    highlights: [],
  },
  {
    name: 'Wu Lab of Social Decision-Making, Icahn School of Medicine at Mount Sinai',
    position: 'Summer Research Assistant (Principal Investigator: Dr. Herbert Wu)',
    url: 'https://www.wulab.bio/',
    startDate: '2024-06-01',
    endDate: '2024-12-31',
    summary: 'Contributed to a computational neuroscience project modeling delayed match-to-sample (DMS) behavior using recurrent neural networks (RNN) inspired by premotor cortical circuits (specifically, biologically inspired RNN architectures obeying Dale’s principle).',
    highlights: [],
  },
  {
    name: 'Bakkour Memory and Decision Lab, University of Chicago ',
    position: 'Research Assistant (Principal Investigator: Dr. Akram Bakkour)',
    url: 'https://bakkourlab.uchicago.edu/',
    startDate: '2023-09-01',
    endDate: '2025-05-31',
    summary: 'Assisted in a project studying how feature-based representation may facilitate generalizable predictive knowledge, fitting the Successor Representation Model on a multi-phase, feature-based RL task.',
    highlights: [],
  },
  {
    name: 'STAR Lab, Southern University of Science and Technology ',
    position: 'Research Assistant (Principal Investigator: Dr. Jinchu Hu)',
    url: 'https://star-lab.cc/startlab/STARLAB.htm',
    startDate: '2023-06-01',
    endDate: '2024-05-31',
    summary: 'Investigated sex-specific effects of intranasal oxytocin on threat reversal learning to clarify its therapeutic potential for anxiety disorders, fitting Pearce–Hall model on a threat reversal learning for parameter estimation and sex differences.',
    highlights: [],
  },
  {
    name: 'Dr. Zhicheng Lin’s Lab, The Chinese University of Hong Kong (Shenzhen)',
    position: 'Research Assistant (Principal Investigator: Dr. Zhicheng Lin)',
    url: 'https://psy.ustc.edu.cn/2024/0116/c27895a628502/page.htm',
    startDate: '2022-03-01',
    endDate: '2023-05-31',
    summary: 'Examined the characteristics and development pattern of psychological research through the lens of metascience, focusing on the diversity (operationalized via Simpson diversity index) of authorship, editorship, and ownership in top psychology journals',
    highlights: [],
  },
  {
    name: 'Dr. Shi Yu’s Lab, The Chinese University of Hong Kong (Shenzhen)',
    position: 'Research Assistant (Principal Investigator: Dr. Shi Yu)',
    url: 'https://hss.cuhk.edu.cn/en/teacher/470',
    startDate: '2021-09-01',
    endDate: '2023-05-31',
    summary: 'Contributed to a longitudinal study on Chinese middle school students’ study motivation and meaning of life.',
    highlights: [],
  },
];

export default work;
