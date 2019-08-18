import React from "react";
import PropTypes from "prop-types";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperators,
  updateDisplay
}) => <div className="keypad-container" />;

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperators: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired
};

export default Keypad;
