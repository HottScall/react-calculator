import React from "react";
import PropTypes from "prop-types";
import "./Key.css";

const Key = ({ keyAction, keyType, keyValue }) => (
  <div className={"key-container ${keyType}"}>
    <p className="key-value">{keyValue}</p>
  </div>
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyTypes: PropTypes.func.isRequired,
  keyValue: PropTypes.func.isRequired
};

export default Key;
