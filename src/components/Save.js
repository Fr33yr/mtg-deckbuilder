import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { saveDeck } from '../config/firebase'
import { useAuth } from '../context/AuthContext'
import {reset} from '../store/deckSlice'

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
    const dispatch = useDispatch()
    const { user } = useAuth()
    let navigate = useNavigate()

    const handleSubmit = () => {

    }

    return (
        <Fragment>
            <Formik
                initialValues={{
                    name: deckName
                }}
                validate={validateName}
                onSubmit={(values) => {
                    values.name && saveDeck({ deckList, deckName: values.name }, user.uid)
                    navigate("/")
                    dispatch(reset())
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
