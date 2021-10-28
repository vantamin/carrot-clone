import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

document.querySelector('#send').addEventListener('click', () => {
  const file = document.querySelector('#image').files[0];
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    null,
    (error) => {
      console.error(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        addDoc(collection(db, 'products'), {
          title: document.querySelector('#title').value,
          price: document.querySelector('#price').value,
          content: document.querySelector('#content').value,
          date: new Date(),
          image: url,
        })
          .then((result) => {
            console.log(result);
            window.location.href = '/index.html';
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
});
