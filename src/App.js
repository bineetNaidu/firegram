import React, { useState } from 'react';
import Auth from './Auth';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import UploaderForm from './UploaderForm';

function App() {
  // STATES
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <Title user={user} />
          <UploaderForm user={user} />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal url={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </>
      ) : (
        <Auth setUser={setUser} />
      )}
    </div>
  );
}

export default App;
