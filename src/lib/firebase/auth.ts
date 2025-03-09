import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut,
  UserCredential,
  Auth
} from 'firebase/auth';
import { auth } from './config';

// Google Sign-in
export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Email & Password Sign-up
export const registerWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email & Password Sign-in
export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Reset Password
export const sendPasswordReset = async (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

// Logout
export const logout = async (): Promise<void> => {
  return signOut(auth);
};

// Get current authenticated user
export const getCurrentUser = (): Auth['currentUser'] => {
  return auth.currentUser;
}; 