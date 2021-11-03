import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

document.querySelector('#register').addEventListener('click', () => {
  const email = document.querySelector('#email-new').value;
  const password = document.querySelector('#pw-new').value;

  createUserWithEmailAndPassword(auth, email, password).then((result) => {
    console.log(result);
    console.log(result.user);
  });
});
