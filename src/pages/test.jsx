import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const test = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Trigger Popup</button>

      {/* Popup Component */}
      <Popup open={isOpen} onClose={closePopup} modal closeOnDocumentClick>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Popup Content Here!</h3>
          <p>This is an example of triggering a popup.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      </Popup>
    </div>
  );
};

export default test;
