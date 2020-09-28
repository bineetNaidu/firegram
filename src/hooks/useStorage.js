import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';

const useStorage = (file) => {
  // STATES
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // HOOKS && CONTEXTS
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);

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
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
