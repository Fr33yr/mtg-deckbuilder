import React, { Fragment, useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Toaster, toast } from 'react-hot-toast'

import '../assets/css/main.css'
import { useAuth } from '../context/AuthContext'

export function SignIn() {
  const { singUp } = useAuth()
  const [error, setError] = useState('')

  const handleSubmit = async (email, password) => {
    try {
      await singUp(email, password)
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        setError('Invalid email')
      } else if (err.code === 'auth/missing-email') {
        setError('Write an email')
      }
    }
  }

    useEffect(()=>{
      error && toast.error(error, {
        style: {
          borderRadius: "5px",
          background: '#333',
          color: '#fff',
        }
      })
    },[error])

    return (
      <Fragment>
        <Toaster
        position='top-center'/>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values) => handleSubmit(values.email, values.password)}>
          <Form className='signinform'>
            <label>email</label>
            <Field name="email" type="email" />
            <label>password</label>
            <Field name="password" type="password" />
            <button type='submit'>SignIn</button>
          </Form>
        </Formik>
      </Fragment>
    )
  }
