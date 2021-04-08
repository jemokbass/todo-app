import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAG526pweihFXC3_0lIbLu9lfbQ5i7-WBM',
  authDomain: 'todo-app-9d8dc.firebaseapp.com',
  databaseURL: 'https://todo-app-9d8dc-default-rtdb.firebaseio.com',
  projectId: 'todo-app-9d8dc',
  storageBucket: 'todo-app-9d8dc.appspot.com',
  messagingSenderId: '553337100200',
  appId: '1:553337100200:web:4837ffe8afc9368be66f9d',
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
