import styled, {css} from "styled-components"

export const GlobalContainer = styled.div`
    padding: 0px;
    margin: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormContainer = styled.div`
    border: 4px solid black;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
`
export const RealForm = styled.form`
    border: 2px solid black;
    padding: 30px;
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
`

export const Container = styled.div`
display: flex;
flex-direction: ${({from}) => from === 'button' ? 'row' : 'column'};
${({from}) => from === 'button' && css`

`}
`

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #4E6E81;
`

export const Button = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 10px;
`
export const CardContainer = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: coral;
    align-items: center;
    border: 5px solid orange;
    border-radius: 20px;
`