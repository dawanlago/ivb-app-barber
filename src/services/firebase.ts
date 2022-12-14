import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD2j6eu5RLKfiBU_j_L05kdwm59oZu4tiI',
  authDomain: 'barber-bd.firebaseapp.com',
  projectId: 'barber-bd',
  databaseURL: 'https://barber-bd-default-rtdb.firebaseio.com/',
  storageBucket: 'barber-bd.appspot.com',
  messagingSenderId: '806633487519',
  appId: '1:806633487519:web:df23343c98b4f10c1776aa',
  measurementId: 'G-49GDGPLCV3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
