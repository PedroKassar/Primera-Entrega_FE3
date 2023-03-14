import React, {Fragment, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { FormContainer, Input, Container, RealForm, Button, GlobalContainer } from './styles/StyledComponents'

const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/;

const Form = ({handleFetchInformation}) => {
    const getInitialValues = () => ({
        name: "",
        email: "",
        password: "",
    });

    const getValidationSchema = () => (
        Yup.lazy(() =>
        
            Yup.object().shape({

                name: Yup.string().trim().required("Complete the field").min(3, 'The name must have at least 3 caracters'),

                email: Yup.string().email().required("Complete the field"),

                password: Yup.string()
                    .min(6, 'The password must have at least 6 caracters')
                    .required('Complete the field')
                    .matches(VALID_PASSWORD_REGEX,
                    'The password must have at least 6 caracters, a capital letter, a lowercase one, a number and a special caracter',
                ),
            })
        )
    )

    const onSubmit = (values) => {
        console.log(values)
        handleFetchInformation(values)
    }

    const { handleSubmit, values, setFieldValue, errors } = useFormik({

        validateOnBlur: false,
    
        validateOnChange: false,
    
        initialValues: getInitialValues(),
    
        validationSchema: getValidationSchema(),
    
        onSubmit
    
    });


    return (
    <GlobalContainer>
    <FormContainer>
        <h1 style={{textAlign: 'center'}}>Register</h1>
        <RealForm id = 'form' onSubmit={handleSubmit}>
            <Container>
                <label>Name:</label>
                <Input type="text"
                    name='name'
                    placeholder='Enter your name' 
                    value={values.name}
                    onChange={(e) => setFieldValue('name', e.target.value)}
                />
                {errors['name'] && (<p style={{ color: "red", fontSize: "12px", padding: 0, margin: 0 }}>{errors['name']}</p>)}
            </Container>
            <Container>
                <label>E-mail:</label>
                <Input type="email" 
                    name='email'
                    placeholder='Enter your e-mail'
                    value={values.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                />
                {errors['email'] && (<p style={{ color: "red", fontSize: "12px", padding: 0, margin: 0 }}>{errors['email']}</p>)}
            </Container>
            <Container>
                <label>Password:</label>
                <Input type="password" 
                    name='password'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={(e) => setFieldValue('password', e.target.value)}
                />
                {errors['password'] && (<p style={{ color: "red", fontSize: "12px", padding: 0, margin: 0 }}>{errors['password']}</p>)}
            </Container>
        </RealForm>
        <Container from='button'>
            <Button btn='cancel'>Cancel</Button>
            <Button type='submit' btn='submit' form='form'>Submit</Button>
        </Container>
    </FormContainer>
    </GlobalContainer>
    )

}

export default Form

