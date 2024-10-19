import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: '#70B838',
    height: '24px',
    borderRadius: '26px',
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#D9D9D9', borderRadius: '26px' }}>
      <div style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
