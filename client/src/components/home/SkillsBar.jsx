import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: "25%", marginLeft: '8%', marginBottom: '1rem' }}>
      <img className='mr-2' alt='icon' src={value} width='50px' height='50px' />
      <p className="lead mb-1 mt-2">{skill}</p>
      {/* <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      /> */}
    </div>
  );
}

export default SkillsBar;
