// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA12O-HYh6m_frdvAVH11NONFVxU2oPq4w",
    authDomain: "slack-clone-c0604.firebaseapp.com",
    projectId: "slack-clone-c0604",
    storageBucket: "slack-clone-c0604.appspot.com",
    messagingSenderId: "743023362080",
    appId: "1:743023362080:web:ae160ca91c4875bd587c45",
    measurementId: "G-SDXF8S64K7"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;