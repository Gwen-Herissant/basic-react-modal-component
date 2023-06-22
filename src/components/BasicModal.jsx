import React from 'react';
import './BasicModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export default function BasicModal({isOpen, closeModal, textContent = ''}){
  return(
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="close-btn" type="buton" onClick={closeModal}><FontAwesomeIcon icon={faXmark} size='xl'/></button>
            <p className='modal-text'>{textContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}


BasicModal.propTypes = {
  isOpen: PropTypes.func,
  closeModal: PropTypes.func,
  textContent: PropTypes.string.isRequired,
};

BasicModal.defaultProps = {
  isOpen: false,
  closeModal: true,
};