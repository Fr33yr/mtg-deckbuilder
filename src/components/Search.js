import React, { Fragment, useContext } from 'react'
import {useSelector} from 'react-redux'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
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
                    <Form className='searchform' style={user? {} : {margin: "0 auto"}}>
                        <label className='container-checkbox'>
                            <Field type="checkbox" name="colors" value="R" className='color-checkbox'/>
                            <span className="checkmark" style={{border: "4px solid red"}}></span>
                        </label>
                        <label className='container-checkbox'>
                            <Field type="checkbox" name="colors" value="G" className='color-checkbox'/>
                            <span className="checkmark" style={{border: "4px solid green" }}></span>
                        </label>
                        <label className='container-checkbox'>
                            <Field type="checkbox" name="colors" value="U" className='color-checkbox'/>
                            <span className="checkmark" style={{border: "4px solid blue"}}></span>
                        </label>
                        <label className='container-checkbox'>
                            <Field type="checkbox" name="colors" value="B" className='color-checkbox'/>
                            <span className="checkmark" style={{border: "4px solid black"}}></span>
                        </label>
                        <label className='container-checkbox'>
                            <Field type="checkbox" name="colors" value="W" className='color-checkbox'/>
                            <span className="checkmark" style={{border: "4px solid wheat"}}></span>
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
