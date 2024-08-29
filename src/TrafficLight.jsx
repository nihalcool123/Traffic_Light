import React from 'react'
import { useState, useEffect } from 'react'

const TrafficLight = ({ trafficStates }) => {

    const [currentColor, setCurrentColor] = useState('green')

    useEffect(() => {

        const { duration, next } = trafficStates[currentColor]

        const timerid = setTimeout(() => {
            setCurrentColor(next)
        }, duration)

        return () => clearTimeout(timerid)

    }, [currentColor])

    return (
        <div className='traffic-light-container' >
            {Object.keys(trafficStates).map((color) => (
                <div className='traffic-light' style={{
                    backgroundColor: color === currentColor && trafficStates[color].backgroundColor
                }} />
            ))}
        </div>
    )
}


export default TrafficLight