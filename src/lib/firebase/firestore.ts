import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  DocumentData,
  QueryConstraint,
  QuerySnapshot,
  DocumentReference,
  DocumentSnapshot,
  WithFieldValue,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

// Generic function to add a document to a collection
export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T,
  id?: string
): Promise<DocumentReference<DocumentData>> => {
  const collectionRef = collection(db, collectionName);
  
  if (id) {
    const docRef = doc(collectionRef, id);
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef;
  } else {
    const docRef = doc(collectionRef);
    await setDoc(docRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef;
  }
};

// Get a document by ID
export const getDocument = async (
  collectionName: string,
  id: string
): Promise<DocumentSnapshot<DocumentData>> => {
  const docRef = doc(db, collectionName, id);
  return getDoc(docRef);
};

// Update a document
export const updateDocument = async (
  collectionName: string,
  id: string,
  data: Partial<DocumentData>
): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  return updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

// Delete a document
export const deleteDocument = async (
  collectionName: string,
  id: string
): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  return deleteDoc(docRef);
};

// Query documents from a collection
export const queryDocuments = async (
  collectionName: string,
  ...queryConstraints: QueryConstraint[]
): Promise<QuerySnapshot<DocumentData>> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, ...queryConstraints);
  return getDocs(q);
};

// Get all documents from a collection
export const getAllDocuments = async (
  collectionName: string
): Promise<QuerySnapshot<DocumentData>> => {
  const collectionRef = collection(db, collectionName);
  return getDocs(collectionRef);
}; 