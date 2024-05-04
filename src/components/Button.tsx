import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  text?: string;
  color?: string;
  toggleAddTask?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text = 'default', color = 'yellow', toggleAddTask }) => {
  return (
    <button
      onClick={toggleAddTask}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  toggleAddTask: PropTypes.func,
};

export default Button;
