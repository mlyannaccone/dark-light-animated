import './App.css'
import Home from './components/home/Home'
import React, {useState} from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return(
    <>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}

export default App