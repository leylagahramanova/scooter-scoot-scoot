import React from 'react';

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
  is: boolean; 
}

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked, is }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

export default Toggle;