import React from 'react';
import ImageGrid from './ImageGrid';
import Title from './Title';
import UploaderForm from './UploaderForm';

function App() {
  return (
    <div className="App">
      <Title />
      <UploaderForm />
      <ImageGrid />
    </div>
  );
}

export default App;
