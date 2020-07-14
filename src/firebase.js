import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    //enter your own config
})



// const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
