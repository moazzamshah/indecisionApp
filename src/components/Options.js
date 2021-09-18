import React from 'react';
import Option from './Option';
const Options = ({ handleDeleteOptions, options, handleDeleteOption }) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your options</h3>
      <button onClick={handleDeleteOptions} className='button button--link'>
        {' '}
        Remove All{' '}
      </button>
    </div>

    {options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index + 1}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
