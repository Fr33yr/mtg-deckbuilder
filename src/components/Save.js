import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { saveDeck } from '../config/firebase'
import { useAuth } from '../context/AuthContext'
import {useFetch} from '../hooks/useFetch'

//validates deck name
const validateName = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = "Name required"
        return alert(errors.name)
    }
}

export function Save() {
    const deckList = useSelector((state) => state.deck.value)
    const deckName = useSelector((state)=> state.deck.deckName)
    const deckId = useSelector((state)=> state.deck.deckId)
    const { user } = useAuth()
    let navigate = useNavigate()

    return (
        <Fragment>
            <Formik
                initialValues={{
                    name: deckName
                }}
                validate={validateName}
                onSubmit={(values) => {
                    values.name && saveDeck({ deckList, deckName: values.name }, user.uid, deckId)
                    navigate("/")
                }}
                >
                <Form>
                    <button className='save-btn'
                        type='submit'>Save</button>
                    <Field className='save-deckname'
                        type="text" name="name" placeholder="Deck name.." />
                </Form>
            </Formik>
        </Fragment>
    )
}
