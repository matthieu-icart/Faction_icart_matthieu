// REACT-ROUTER-DOM
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
// LIGHT & DARK MODE
import { ThemeProvider } from './utils/context/switchTheme.jsx'
// LOCK & UNLOCK
import { LockProvider } from './utils/context/switchLock.jsx'
// QUESTS & ANSWERS
import { TestProvider } from './utils/context/switchTest'
// GLOBAL STYLE
import GlobalStyle from './utils/style/GlobalStyle'

// PAGES
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Results'
import Faction from './pages/Faction'
import Error from './pages/Error'

// LAYOUT
import Header from './components/Header'

// RETURN APP & ROUTER
function App() {
  return (
    <>
      {/* ROUTER */}
      <BrowserRouter>
        {/* PROVIDER */}
        <ThemeProvider>
          <LockProvider>
            <TestProvider>
              {/* STYLE */}
              <GlobalStyle />
              {/* LAYOUT */}
              <div className="AllScreen">
                <Header />
                {/* ROUTES */}
                <Routes>
                  {/* HOME */}
                  <Route path="/home" element={<Home />} />
                  {/* TEST */}
                  <Route path="/test" element={<Test />} />
                  {/* RESULTS */}
                  <Route path="/result" element={<Result />} />
                  {/* FREELANCES */}
                  <Route path="/faction" element={<Faction />} />
                  {/* ERROR */}
                  <Route path="*" element={<Error />} />
                  {/* REDIRECT TO HOME */}
                  <Route path="" element={<Navigate to="/home" />} />
                </Routes>
              </div>
            </TestProvider>
          </LockProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
