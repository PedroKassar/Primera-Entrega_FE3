import React from 'react'
import { useState } from 'react';
import Form from './Form'
import Card from './Card';
import { GlobalContainer } from './styles/StyledComponents'

function App() {
  const [view, setView] = useState("Form")
  const [values, setValues] = useState(null)


  const handleFetchInformation = userInformation =>{
    setValues(userInformation)
    handleView('Card')
  }

  const handleView = (page) =>{
    setView(page)
  }


  return (
    <GlobalContainer>
      {view === "Form" && (<Form handleFetchInformation={handleFetchInformation}/>)}
      {view === "Card" && (<Card {...values} />)}
    </GlobalContainer>
  )

}

export default App