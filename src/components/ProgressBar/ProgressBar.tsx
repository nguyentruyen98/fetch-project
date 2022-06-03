import './ProgressBar.scss';

import React from 'react';

interface IProgressBarProps {
  value: string;
}

const ProgressBar = ({value}: IProgressBarProps) => {
  return <progress id="file" value={value} max="100"></progress>;
};

export default ProgressBar;
