import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

// takes a collection name
const useFirestore = (collection, userId) => {
  // STATES
  const [docs, setDocs] = useState([]);

  // HOOKS
  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .where('userId', '==', userId)
      .orderBy('createdAt')
      .onSnapshot((snaps) => {
        let documents = [];
        snaps.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection, userId]);

  return { docs };
};

export default useFirestore;
