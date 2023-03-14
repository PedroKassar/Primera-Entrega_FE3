import React from 'react'
import { CardContainer } from './styles/StyledComponents'

const Card = ({name, email, password}) => {
  return (
    <CardContainer>
        <h1>Hello {name}!</h1>
        <h2>E-mail: {email}</h2>
        <h2>Password: {password}</h2>
    </CardContainer>
  )
}

export default Card

