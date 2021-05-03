const firebaseConfig = {
    apiKey: "AIzaSyATH2btiPB2Pe4E9oxfcS4weuZQ4cHDBNQ",
    authDomain: "disney-plus-clone-2f0d4.firebaseapp.com",
    projectId: "disney-plus-clone-2f0d4",
    storageBucket: "disney-plus-clone-2f0d4.appspot.com",
    messagingSenderId: "341430775146",
    appId: "1:341430775146:web:e00d5eca853f3cae144913",
    measurementId: "G-0CMSHRFYG7"
  };

const firebaseApp = firbase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
