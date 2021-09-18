import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({ selectedOption, handleCloseModal }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleCloseModal}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
  >
    <div>
      <h3 className='modal__title'> Selected Option</h3>
      {selectedOption && <p className='modal__body'> {selectedOption} </p>}
      <button className='button'onClick={handleCloseModal}> Ok </button>
    </div>
  </Modal>
);

export default OptionModal;
