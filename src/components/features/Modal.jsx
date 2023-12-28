// Modal.jsx
import React from 'react';
import './features.css';

const Modal = ({ open, onClose, data }) => {
  if (!open) return null;

  return (
    <div className={`modal-container ${open ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <button className='closeBtn' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </button>
        {data && (
          <>
            <h3 className="text-start titleModal">{data.title}</h3>
            <p className="text-start">{data.text}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
