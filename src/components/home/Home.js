import React from 'react'
import {useSpring, useTransition, animated} from 'react-spring' 
import DarkLightIcon from '../darkLightIcon/DarkLightIcon'
import './Home.css'

function Home({darkMode, setDarkMode}) {
    const switchMode = useSpring({
        color: darkMode ? "#f7efd7" : "#4a413c",
        backgroundColor: darkMode ? "#4a413c" : "#f7efd7"
    })

    function toggleMode() {
        setDarkMode(prev => !prev)
    }

    const transitionText = useTransition(darkMode, null, {
        from: { opacity: 0, position: 'absolute'},
        enter: { opacity: 1, position: 'absolute'},
        leave: { opacity: 0, positiposition:'absolute'}
      })

    console.log(darkMode)

    const textarea = transitionText.map(({ item, key, props }) => (
        <animated.h1 style={props} className="jumbo">
            {item ? "dark" : "light"}
        </animated.h1>
    ))

    return (
        <animated.div style={{...switchMode, height: "100%"}} className="home-div">
            <div className="mode-div" onClick={toggleMode}>
                {textarea}
            </div>
            <DarkLightIcon darkMode={darkMode} setDarkMode={setDarkMode}/>
        </animated.div>
    )
}

export default Home
