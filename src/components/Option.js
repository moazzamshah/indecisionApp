import React from 'react';
const Option = ({ option, handleDeleteOption }) => (
  <div>
    <p> {option} </p>
    <button onClick={() => handleDeleteOption(option)}>X </button>
  </div>
);

export default Option;
