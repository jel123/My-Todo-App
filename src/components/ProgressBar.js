import React from "react";

function ProgressBar({completion}) {
  return (
    <div className="progress-wrapper">
      <span className="progress-label"> Task Completion </span>
      <div className="progress-gray">
        <div className="percentage-text">
            {`${completion}%`}
         </div>
        <div className="progress-green" style={{ width: `${completion}%` }}/>
      </div>
    </div>
  );
}

export default ProgressBar;
