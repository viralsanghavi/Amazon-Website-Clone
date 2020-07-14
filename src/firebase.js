import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNTr_m-YnPssv7-G70BdkZXoiDM3CpsB8",
    authDomain: "clone-1a9f1.firebaseapp.com",
    databaseURL: "https://clone-1a9f1.firebaseio.com",
    projectId: "clone-1a9f1",
    storageBucket: "clone-1a9f1.appspot.com",
    messagingSenderId: "1006247703410",
    appId: "1:1006247703410:web:01eb0e6ac0a00316e9e3eb",
    measurementId: "G-YV0ZJJ9RLV"
})



// const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
