import React from 'react';
import useFirestore from './hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map(({ id, url }) => (
          <div
            className="img-wrap"
            key={id}
            onClick={() => setSelectedImg(url)}
          >
            <img src={url} alt={`${id}-${url}`} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
