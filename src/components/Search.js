import React, { Fragment, useContext } from 'react'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { types } from '../utils/types'
import { colors } from '../utils/colors'
import { getCards } from '../api/api'
import CardsContext from '../context/CardsContext'
import { useAuth } from '../context/AuthContext'


export default function Search() {
    const { setSearchResults } = useContext(CardsContext)
    const { user } = useAuth()

    return (
        <Fragment>
            <div className='search'>

                <Formik
                    initialValues={{
                        colors: [],
                        type: '',
                        name: ''
                    }}
                    onSubmit={async (values) => {
                        let { name, type, colors } = values
                        colors = colors.join()
                        const res = await getCards(name, type, colors)
                        setSearchResults(res)
                    }}>
                    <Form className='searchform' style={user ? {} : { margin: "0 auto" }}>

                        <div className="colors-container">
                            {colors.map((item, index) => (
                                <label className="container-checkbox" key={index}>
                                    <Field type="checkbox" name="colors" value={item.val} className='color-checkbox' />
                                    <span className="checkmark" style={{ border: `4px solid ${item.color}` }}></span>
                                </label>
                            ))
                            }
                        </div>

                        <label>
                            <Field name="type" as="select" className="select">
                                {types.map((t, index) => <option value={t} key={index}
                                    className="bg-white">{t}</option>)}
                            </Field>
                        </label>

                        <div className="name-input">
                            <Field type="text" name='name' />
                            <button type="submit"
                                className='find-btn'>Find</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Fragment>
    )
}
