import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import UploaderForm from './UploaderForm';

function App() {
  // STATES
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploaderForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal url={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
