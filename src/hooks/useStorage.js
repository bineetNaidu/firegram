import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase';

const useStorage = (file, userId) => {
  // STATES
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // HOOKS && CONTEXTS
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(`/${userId}/${file.name}`);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp;
        collectionRef.add({ url, createdAt, userId });
        setUrl(url);
      }
    );
  }, [file, userId]);

  return { progress, url, error };
};

export default useStorage;
