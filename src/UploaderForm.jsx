import React, { useState } from 'react';

const UploaderForm = () => {
  // STATES
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // HOOKS
  // FUNCTIONS
  const handleFile = (e) => {
    let selected = e.target.files[0];
    const types = ['image/png', 'image/jpeg'];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png / jpeg)');
    }
  };

  return (
    <form>
      <input type="file" onChange={handleFile} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploaderForm;
