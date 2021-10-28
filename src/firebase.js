import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBsgFCnAACsSyxVw5V1NVlOd0SVMNYn1V8',
  authDomain: 'carrot-clone-8268a.firebaseapp.com',
  projectId: 'carrot-clone-8268a',
  storageBucket: 'carrot-clone-8268a.appspot.com',
  messagingSenderId: '896837902817',
  appId: '1:896837902817:web:0d8d872074d683f1df72a0',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
