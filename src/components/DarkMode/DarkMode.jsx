import React from 'react';
import PropTypes from 'prop-types';

const DarkMode = (props) => {
  const { onClick } = props;

  return (
    <div className="toggle-container">
      <label htmlFor="darkModeToggle">
        <input id="darkModeToggle" onClick={onClick} className="toggle-checkbox" type="checkbox" />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false" />
          </div>
          <div className="toggle-button" />
          <div className="moon-icon-wrapper">
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false" />
          </div>
        </div>
      </label>
    </div>
  );
};

DarkMode.propTypes = {
  onClick: PropTypes.node,
};

export default DarkMode;
