import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from './firebase';

document.querySelector('#send').addEventListener('click', () => {
  const file = document.querySelector('#image').files[0];
  const storageRef = ref(storage, `images/${file.name}`);
  uploadBytesResumable(storageRef, file);

  addDoc(collection(db, 'products'), {
    title: document.querySelector('#title').value,
    price: document.querySelector('#price').value,
    content: document.querySelector('#content').value,
    date: new Date(),
  })
    .then((result) => {
      console.log(result);
      window.location.href = '/index.html';
    })
    .catch((err) => {
      console.log(err);
    });
});
