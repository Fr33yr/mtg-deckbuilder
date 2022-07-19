import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import {firebaseConfig} from './firebase.config'


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