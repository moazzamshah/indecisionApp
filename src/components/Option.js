import React from 'react';
const Option = ({ option, handleDeleteOption, count }) => (
  <div className='option'>
    <p className='option__text'>
      {count}. {option}
    </p>

    <button
      onClick={() => handleDeleteOption(option)}
      className='button button--link'
    >
      <i className='fas fa-trash'></i>
    </button>
  </div>
);

export default Option;
