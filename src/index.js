import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import './main.css';

getDocs(collection(db, 'products')).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    const tamplate = `<div class="product">
      <div class="thumbnail" style="background-image: url('https://via.placeholder.com/350')"></div>
      <div class="flex-grow-1 p-4">
        <h5 class="title">${doc.data().title}</h5>
        <p class="date">2030년 1월 8일</p>
        <p class="price">20000원</p>
        <p class="float-end">?0</p>
      </div>
    </div>`;
    document.querySelector('.container').innerHTML += tamplate;
  });
});
