import React from 'react'
import {useSpring, animated} from 'react-spring' 
import {interpolate} from 'flubber' 
import './DarkLightIcon.css'
import moonIcon from '../../assets/MoonIcon'
import sunIcon from '../../assets/SunIcon'

const DarkLightIcon = ({darkMode, setDarkMode}) => {
    const {t, x} = useSpring({
        t: darkMode ? 0 : 1,
        x: darkMode ? "#f7efd7" : "#4a413c",
        config: {
            tension: 270
        },
    })

    const fadeIn = useSpring({
        from: {opacity: 0},
        opacity: 1
    })

    const customInterpolator = interpolate(moonIcon, sunIcon)

    return (
        <svg className="mode-icon" viewBox="0 0 512 512" onClick={() => setDarkMode(prev => !prev)}>
            <animated.path 
                style={{
                    fill: x.interpolate(x => `${x}`),
                    ...fadeIn
                }} 
                d={
                    t.interpolate(customInterpolator)
                }
            />
        </svg>
    )
}

export default DarkLightIcon

