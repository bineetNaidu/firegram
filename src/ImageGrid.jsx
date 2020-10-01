import React from 'react';
import useFirestore from './hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map(({ id, url }) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={id}
            onClick={() => setSelectedImg(url)}
          >
            <motion.img
              src={url}
              alt={`${id}-${url}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
