/**
 * @typedef {Object} Position
 *
 * @property {string} lab - Name of the lab or program
 * @property {string} university - Name of the institution/university
 * @property {string} position - Position title
 * @property {string} labUrl - Lab website; empty string = placeholder
 * @property {string} schoolUrl - Institution/university website
 * @property {string} startDate - Start date in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date in YYYY-MM-DD format; undefined = active
 * @property {string[]} highlights - Bulleted highlights (key responsibilities)
 * @property {string} logo - Path to lab logo image (relative to public/)
 * @property {string} location - City and state/country
 */

const work = [
  {
    lab: 'Motivated Learning and Memory Laboratory',
    university: 'McLean Hospital',
    position: 'Part-Time Research Assistant (Principal Investigator: Dr. Daniel Dillon)',
    labUrl: 'https://cdasr.mclean.harvard.edu/mlml/',
    schoolUrl: 'https://www.mcleanhospital.org/',
    startDate: '2025-07-01',
    logo: '/personal_site/images/institutions/McLean.png',
    location: 'Boston, MA',
    highlights: [
      'Model probabilistic selection task behavior with reinforcement learning drift diffusion models to test whether anhedonia reflects selective impairment in learning from positive feedback.',
      'Find reduced positive learning rates associated with higher anhedonic depression scores across community samples and individuals with major depressive disorder.',
      'Conduct fMRI analyses using whole-brain contrasts, RLDDM-derived parametric modulators, and reward-network ROI tests to map reinforcement-learning signals in MDD.',
    ],
  },
  {
    lab: 'Division of Digital Psychiatry',
    university: 'Beth Israel Deaconess Medical Center',
    position: 'Full-Time Research Assistant (Principal Investigator: John Torous)',
    labUrl: 'https://www.digitalpsych.org/',
    schoolUrl: 'https://www.bidmc.org/',
    startDate: '2025-07-01',
    endDate: '2026-05-31',
    logo: '/personal_site/images/institutions/BIDMC.png',
    location: 'Boston, MA',
    highlights: [
      'Led digital phenotyping analyses of greenspace exposure and stress dynamics, showing stress-buffering effects among healthy controls but limited benefits among clinical high-risk individuals for psychosis.',
      'Applied continuous-time structural equation modeling and network analysis to characterize affective-behavioral dynamics during hybrid cognitive behavioral therapy.',
      'Collaborated on Bayesian hidden Markov modeling of smartphone accelerometer and screen-state data to estimate sleep patterns in real-world psychiatric research.',
    ],
  },
  {
    lab: 'Laboratory of Neural Computation and Cognition',
    university: 'Brown University',
    position: 'Part-Time Research Assistant (Principal Investigator: Dr. Michael Frank)',
    labUrl: 'https://www.lnccbrown.com/',
    schoolUrl: 'https://www.brown.edu/',
    startDate: '2024-06-01',
    endDate: '2026-05-31',
    logo: '/personal_site/images/institutions/Brown.png',
    location: 'Providence, RI',
    highlights: [
      'Developed a hierarchical Bayesian modeling pipeline for stop-signal task data, spanning forward simulation, likelihood specification, inference, and model diagnostics.',
      'Implemented trial-specific likelihoods under the Independent Race Model with JAX acceleration and validated the pipeline against benchmark BEESTS estimates.',
      'Applied model-derived inhibitory-control parameters to a computational psychiatry study predicting 18-month suicidal ideation trajectories in teenagers.',
    ],
  },
  {
    lab: 'Bakkour Memory and Decision Lab',
    university: 'University of Chicago',
    position: 'Master Thesis Project (Advisor: Dr. Akram Bakkour)',
    labUrl: 'https://bakkourlab.uchicago.edu/',
    schoolUrl: 'https://www.uchicago.edu/',
    startDate: '2023-09-01',
    endDate: '2025-05-31',
    logo: '/personal_site/images/institutions/UChicago.png',
    location: 'Chicago, IL',
    highlights: [
      'Designed a master thesis study integrating visual creativity tasks with AI-based process measures to test how mood and cognitive flexibility shape originality.',
      'Built a JsPsych experiment combining mood induction, incomplete-shape drawing, and narrative reports from 90 participants across three mood conditions.',
      'Used stroke embeddings, semantic integration metrics, and automated drawing assessment to identify adaptive switching as a key predictor of creative originality.',
    ],
  },
  {
    lab: 'Bakkour Memory and Decision Lab',
    university: 'University of Chicago',
    position: 'Part-Time Research Assistant (Principal Investigator: Dr. Akram Bakkour)',
    labUrl: 'https://bakkourlab.uchicago.edu/',
    schoolUrl: 'https://www.uchicago.edu/',
    startDate: '2023-09-01',
    endDate: '2025-05-31',
    logo: '/personal_site/images/institutions/UChicago.png',
    location: 'Chicago, IL',
    highlights: [
      'Studied how feature-based representations support generalizable predictive knowledge by enabling inferences about distant future outcomes.',
      'Modeled a multi-phase reinforcement learning task in which participants learned robot transitions and rewards, then generalized mappings to novel robots with recombined features.',
      'Fit successor representation models to compare conjunction-based and feature-based learning, finding that feature-based learners generalized best across novel stimuli.',
    ],
  },
  {
    lab: 'STAR Lab',
    university: 'Southern University of Science and Technology',
    position: 'Part-Time Research Assistant (Principal Investigator: Dr. Jinchu Hu)',
    labUrl: 'https://www.hujingchu.com/STARLAB/STARLAB.htm',
    schoolUrl: 'https://www.sustech.edu.cn/en/',
    startDate: '2023-06-01',
    endDate: '2024-06-30',
    logo: '/personal_site/images/institutions/SusTech.png',
    location: 'Shenzhen, China',
    highlights: [
      'Investigated sex-specific effects of intranasal oxytocin on threat reversal learning to clarify its therapeutic potential for anxiety disorders.',
      'Modeled a double-blind, placebo-controlled threat reversal study with hierarchical Bayesian Pearce-Hall models using skin conductance responses from 180 healthy adults.',
      'Identified impaired threat reversal learning among females under placebo and female-specific enhancement of reversal learning following oxytocin administration.',
    ],
  },
  {
    lab: 'Undergraduate Research Awards Program',
    university: 'The Chinese University of Hong Kong',
    position: 'Project Leader (Supervisor: Dr. Shi Yu)',
    labUrl: 'https://www.cuhk.edu.cn/en',
    schoolUrl: 'https://www.cuhk.edu.cn/en',
    startDate: '2022-03-01',
    endDate: '2023-06-30',
    logo: '/personal_site/images/institutions/CUHKSZ.png',
    location: 'Shenzhen, China',
    highlights: [
      'Led a study on perceived academic stress and sleep quality among Chinese college students in the context of intensified academic competition.',
      'Validated a two-factor perceived academic stress scale distinguishing lasting competitive stress from episodic workload-related stress.',
      'Modeled serial mediation pathways showing that academic stress predicted poorer sleep through social comparison and bedtime procrastination, with distinct effects of emotion-regulation strategies.',
    ],
  },
];

export default work;
