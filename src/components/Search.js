import React, { Fragment, useState } from 'react'
import { Formik, Form, Field } from 'formik'

import '../assets/css/main.css'
import { types } from '../utils/types'
import { getCards } from '../api/api'

export default function Search() {
    const [cardData, setCardData] = useState(null)

    return (
        <Fragment>
            <div className='searchform'>
                <Formik
                    initialValues={{
                        colors: [],
                        type: '',
                        name: ''
                    }}
                    onSubmit={async (values)=> {
                        const res = await getCards(values.name, values.type, values.colors.join())
                        setCardData(res)
                    }}>
                    <Form>

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
                            <Field name="type" as="select" className="bg-white mr-6">
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
