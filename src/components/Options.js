import React from 'react';
import Option from './Option';
const Options = ({ handleDeleteOptions, options, handleDeleteOption }) => (
  <div>
    <button onClick={handleDeleteOptions}> Remove All </button>
    {options.map((option) => (
      <Option
        key={option}
        option={option}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
