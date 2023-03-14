import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { FormContainer, Input, Container, RealForm, Button } from './styles/StyledComponents'


const Form = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ values });
        setValues({
            name: "",
            email: "",
            password: "",
        });
    };

    const handleOnChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setValues({...values, [key]: value})
    }

    return (
    <FormContainer>
        <RealForm id = 'form' onSubmit={handleSubmit}>
            <Container>
                <label>Name:</label>
                <Input type="text" required min='3'
                    name='name'
                    placeholder='Enter your name' 
                    value={values.name}
                    onChange={handleOnChange}
                />
            </Container>
            <Container>
                <label>E-mail:</label>
                <Input type="email" required
                    name='email'
                    placeholder='Enter your e-mail'
                    value={values.email}
                    onChange={handleOnChange}
                />
            </Container>
            <Container>
                <label>Password:</label>
                <Input type="password" required
                    name='password'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleOnChange}
                />
            </Container>
        </RealForm>
        <Container from='button'>
            <Button btn='cancel'>Cancel</Button>
            <Button btn='submit' form='form'>Submit</Button>
        </Container>
    </FormContainer>
    )

}

export default Form

