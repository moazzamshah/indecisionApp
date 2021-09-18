import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const OptionModal = ({ selectedOption, handleCloseModal }) => {
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <Modal
        isOpen={!!selectedOption}
        onRequestClose={handleCloseModal}
        style={customStyles}
        // contentLabel='Example Modal'
      >
        {selectedOption && <p> {selectedOption} </p>}
        <h2>Hello</h2>
        <div>I am a modal</div>
        <button onClick={handleCloseModal}> Ok </button>
      </Modal>
    </div>
  );
};

export default OptionModal;
