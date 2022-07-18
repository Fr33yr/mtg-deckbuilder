import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAxlHXZ9tSH19CTRGWFTW2IMS4zZxgtPxY",
    authDomain: "mtg-deckbuilder-bf894.firebaseapp.com",
    projectId: "mtg-deckbuilder-bf894",
    storageBucket: "mtg-deckbuilder-bf894.appspot.com",
    messagingSenderId: "252278878333",
    appId: "1:252278878333:web:11ca4205d9628ddb800114"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

export { app, auth, db }