import React from 'react';

const Modal = ({ url, setSelectedImg }) => {
  // FUNCTIONS
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={url} alt="enlarger pictures" />
    </div>
  );
};

export default Modal;
