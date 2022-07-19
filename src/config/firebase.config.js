import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
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

const saveDeck = async (deckData, userId, deckName) =>{
   await setDoc(doc(db, userId, deckName), {
        deckData
    })
}
saveDeck().catch((err) => {
    return console.log(err)
})

export { app, auth, db, saveDeck }