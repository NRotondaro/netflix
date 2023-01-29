import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBH1lhQ1arAvaPAIRbjjh5qWPmVPDVdTXE',
  authDomain: 'netflix-265ec.firebaseapp.com',
  projectId: 'netflix-265ec',
  storageBucket: 'netflix-265ec.appspot.com',
  messagingSenderId: '393652851471',
  appId: '1:393652851471:web:95ce4f0ba7524b97bf647a',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
