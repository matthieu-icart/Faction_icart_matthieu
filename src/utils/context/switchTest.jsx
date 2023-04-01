/* REACT, USESTATE & CREATECONTEXT */
import React, { useState, createContext } from 'react'

/* TEST CONTEXT */
export const TestContext = createContext()

/* TEST PROVIDER */
export const TestProvider = ({ children }) => {
  /* HOOK USESTATE */
  const [quest, setQuest] = useState(0)
  const [answers, setAnswers] = useState({})
  const [society, setSociety] = useState({})
  /* SAVE ANSWERS FUNCTION */
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }
  /* SAVE SOCIETY FUNCTION */
  const saveSociety = (newSociety) => {
    setSociety({ ...society, ...newSociety })
  }
  /* RETURN */
  return (
    <TestContext.Provider
      value={{ quest, setQuest, answers, saveAnswers, society, saveSociety }}
    >
      {children}
    </TestContext.Provider>
  )
}

export default TestProvider
