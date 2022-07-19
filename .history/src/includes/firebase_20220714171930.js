import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD__7URNDbIxPuYJvlNBiuuErx_-p0wFLg',
  authDomain: 'vue-music-app-js.firebaseapp.com',
  projectId: 'vue-music-app-js',
  storageBucket: 'vue-music-app-js.appspot.com',
  appId: '1:545246114584:web:c6d90536467f403cc5246d',
};
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
