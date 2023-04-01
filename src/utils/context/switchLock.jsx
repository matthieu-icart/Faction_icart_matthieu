/* REACT, USESTATE & CREATECONTEXT */
import React, { useState, createContext } from 'react'

/* LOCK CONTEXT */
export const LockContext = createContext()

/* LOCK PROVIDER */
export const LockProvider = ({ children }) => {
  /* HOOK USESTATE */
  const [lock, setLock] = useState(false)
  /* FUNCTION */
  const setLockFunction = () => {
    setLock(true)
  }
  /* RETURN */
  return (
    <LockContext.Provider
      value={{
        lock,
        setLockFunction,
      }}
    >
      {children}
    </LockContext.Provider>
  )
}

export default LockProvider
