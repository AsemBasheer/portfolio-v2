import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.iconURL}
          isScrolled={isScrolled}
        />
      ))}
    </div>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      {/* <Col xs={12} md={6}> */}
      <SkillsSection
        skills={skills}
        isScrolled={isScrolled}
      />
      {/* </Col> */}
    </>
  );
}

export default SkillsTab;
