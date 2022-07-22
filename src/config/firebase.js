import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    doc, setDoc,
    deleteDoc,
    collection,
    updateDoc
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './firebase.config'


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

const saveDeck = async (deckData, userId, deckId) => {
    if (deckId) {
        await updateDoc(doc(db, userId, deckId), deckData)
    } else if (!deckId) {
        const deckRef = doc(collection(db, userId))
        await setDoc(deckRef, deckData)
    }
}

const deleteDeck = async (userId, deckName) => {
    await deleteDoc(doc(db, userId, deckName))
}

export { app, auth, db, saveDeck, deleteDeck }