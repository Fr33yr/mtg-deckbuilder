import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    doc, setDoc,
    getDoc,
    deleteDoc,
    collection
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './firebase.config'


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

const saveDeck = async (deckData, userId) => {
    const newDeckRef = doc(collection(db, userId))
    await setDoc(newDeckRef, deckData)
}

const deleteDeck = async (userId, deckName) =>{
    await deleteDoc(doc(db, userId, deckName))
}

const renameDeck = async (userId, deckName) => {
    const docRef = doc(db, userId, deckName)
    try {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Document data", docSnap.data());
        } else {
            console.log("No existe");
        }
    } catch (err) {
        console.log(err);
    }
}

export { app, auth, db, saveDeck, renameDeck, deleteDeck }