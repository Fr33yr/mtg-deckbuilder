import React, { Fragment, useContext } from 'react'
import {useSelector} from 'react-redux'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import {Save} from '../components/Save'
import { types } from '../utils/types'
import { getCards } from '../api/api'
import CardsContext from '../context/CardsContext'
import {useAuth} from '../context/AuthContext'


export default function Search() {
    const {searchResults, setSearchResults} = useContext(CardsContext)
    const {user} = useAuth()

    return (
        <Fragment>
            <div className='search'>
                {user ? <Save/> : ""}
                <Formik
                    initialValues={{
                        colors: [],
                        type: '',
                        name: ''
                    }}
                    onSubmit={async (values)=> {
                        const res = await getCards(values.name, values.type, values.colors.join())
                        setSearchResults(res)
                    }}>
                    <Form className='searchform'>
                        <label>
                            <Field type="checkbox" name="colors" value="R" />
                            red
                        </label>
                        <label>
                            <Field type="checkbox" name="colors" value="G" />
                            green
                        </label>
                        <label>
                            <Field type="checkbox" name="colors" value="U" />
                            blue
                        </label>
                        <label>
                            <Field type="checkbox" name="colors" value="B" />
                            black
                        </label>
                        <label>
                            <Field type="checkbox" name="colors" value="W" />
                            white
                        </label>

                        <label>
                            <Field name="type" as="select" className="select">
                                {types.map((t, index) => <option value={t} key={index}
                                    className="bg-white">{t}</option>)}
                            </Field>
                        </label>

                        <Field type="text" name='name' />

                        <button type="submit"
                        className='find-btn'>Find</button>
                    </Form>
                </Formik>
            </div>
        </Fragment>
    )
}
