import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import {
  SiPython, SiR, SiGit, SiHtml5, SiCss, SiJavascript, SiJulia, SiCplusplus,
  SiTensorflow, SiPytorch, SiScikitlearn, SiSpacy, SiOpencv,
  SiPandas, SiNumpy, SiJupyter, SiScipy,
  SiDask, SiApachespark, SiLangchain,
} from 'react-icons/si';
import {
  FaCode, FaDatabase, FaBrain, FaRobot, FaMagic, FaNetworkWired,
  FaBook, FaRocket, FaChartBar, FaChartLine, FaAws,
} from 'react-icons/fa';
/* eslint-enable import/no-extraneous-dependencies */

const ICON_MAP = {
  SiPython,
  SiR,
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJulia,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiSpacy,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiScipy,
  SiDask,
  SiApachespark,
  SiLangchain,
  FaCode,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaMagic,
  FaNetworkWired,
  FaBook,
  FaRocket,
  FaChartBar,
  FaChartLine,
  FaAws,
};

const SkillBar = ({ data, categories, animated }) => {
  const {
    category, competency, title, iconName,
  } = data;
  const Icon = iconName ? ICON_MAP[iconName] : null;

  const color = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0];

  const targetWidth = `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`;

  const titleStyle = { background: color };
  const barStyle = {
    background: color,
    width: animated ? targetWidth : '0%',
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}>
        <span>
          {Icon && <Icon className="skillbar-icon" />}
          {title}
        </span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  animated: PropTypes.bool,
};

SkillBar.defaultProps = {
  categories: [],
  animated: false,
};

const SkillCategoryCard = ({
  category, skills, categories, comparator,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const categorySkills = skills
    .filter((skill) => skill.category.includes(category.name))
    .sort(comparator);

  return (
    <section className="skill-category-card" ref={ref}>
      <div className="skill-category-header">
        <span
          className="skill-category-marker"
          style={{ backgroundColor: category.color }}
        />
        <h3>{category.name}</h3>
      </div>
      <div className="skill-row-container">
        {categorySkills.map((skill) => (
          <SkillBar
            categories={categories}
            data={skill}
            key={skill.title}
            animated={visible}
          />
        ))}
      </div>
    </section>
  );
};

SkillCategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
      iconName: PropTypes.string,
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  comparator: PropTypes.func.isRequired,
};

SkillCategoryCard.defaultProps = {
  skills: [],
  categories: [],
};

const Skills = ({ skills, categories }) => {
  const comparator = (a, b) => {
    if (a.competency !== b.competency) return a.competency > b.competency ? -1 : 1;
    if (a.title !== b.title) return a.title > b.title ? 1 : -1;
    return 0;
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="skill-card-grid">
        {categories.map((category) => (
          <SkillCategoryCard
            key={category.name}
            category={category}
            skills={skills}
            categories={categories}
            comparator={comparator}
          />
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
      iconName: PropTypes.string,
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
