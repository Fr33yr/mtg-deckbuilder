import { useState, useEffect } from "react";
import {collection, getDocs, query} from 'firebase/firestore'

import { db } from "../config/firebase";

export function useFetch(user){
    const [data, setData] = useState(null)

    useEffect(() => {
        if (user) {
          const decksRef = collection(db, user.uid)
          const q = query(decksRef)
          getDocs(q).then((snapshot) => {
            let arr = []
            snapshot.forEach((doc) => {
              arr.push({ ...doc.data(), id: doc.id })
            })
            setData(arr)
          }).catch(err => console.log(err))
        }
      }, [user, data])

    return [data]
}