import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { saveDeck } from '../config/firebase.config'
import { useAuth } from '../context/AuthContext'

//validates deck name
const validateName = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = "Name required"
    }

    return alert(errors.name)
}

export function Save() {
    const deckList = useSelector((state) => state.deck.value)
    const { user } = useAuth()

    return (
        <Fragment>
            <Formik
                initialValues={{
                    name: ""
                }}
                validate={validateName}
                onSubmit={(values) => (values.name && saveDeck(deckList, user.uid, values.name))}>
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
