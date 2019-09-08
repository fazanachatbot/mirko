import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isShowing, hide, children }) => isShowing ? createPortal(
  <>
    <div className='modal-overlay'>
        <div className='modal-wrapper'>
          <div className='modal'>
            {children}
            <button className='hide' onClick={hide}>Close</button>
          </div>
        </div>
    </div>
  </>, document.body
) : null;

export default Modal;