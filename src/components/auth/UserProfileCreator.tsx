'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { addDocument, getDocument } from '@/lib/firebase/firestore';

interface UserData {
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
}

const UserProfileCreator = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    const createUserProfileIfNeeded = async () => {
      if (!currentUser) return;

      try {
        // Check if user profile already exists
        const userDoc = await getDocument('users', currentUser.uid);
        
        if (!userDoc.exists()) {
          // Create new user profile in database
          const userData: UserData = {
            email: currentUser.email || '',
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            createdAt: new Date(),
          };
          
          await addDocument('users', userData, currentUser.uid);
          console.log('User profile created successfully');
        }
      } catch (error) {
        console.error('Error creating user profile:', error);
      }
    };

    createUserProfileIfNeeded();
  }, [currentUser]);

  return <>{children}</>;
};

export default UserProfileCreator; 