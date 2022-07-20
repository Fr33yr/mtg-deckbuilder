import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    doc, setDoc,
    collection,
    query,
    where,
    getDocs,
    getDoc
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './firebase.config'


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

const getDecks = (userId) => {
    const decksRef = collection(db, userId)
    const q = query(decksRef)
    getDocs(q).then((snapshot)=>{
        let arr = []
        snapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id})
        })
        console.log(arr)
    }).catch(err=>console.log(err))
}

const saveDeck = async (deckData, userId, deckName) => {
    await setDoc(doc(db, userId, deckName), {
        deckData
    })
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

export { app, auth, db, saveDeck, renameDeck, getDecks }