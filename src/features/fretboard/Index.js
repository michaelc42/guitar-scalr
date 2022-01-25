import React, { useState, useEffect }from 'react'
import { Controller } from './Controller'
import { Fretboard } from './Fretboard'
import stylesheet from './Index.css'
import { getScalesNotes, scaleNames } from '../../data/scales.js'
import { PlayScale } from '../toneGenerator/PlayScale'

export const Index = () => {

    const instruments = {
        guitar: {
            openStrings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
            numStrings: 6,
        },
        ukulele: {
            openStrings: ['A4','E4','C3','G3'],
            numStrings: 4
        },
        violin: {
            openStrings: ['E3','A3','D2','G2'],
            numStrings: 4
        }
    }

    
    const [scale, setScale] = useState('');
    const [root, setRoot] = useState('');
    const [instrument, setInstrument] = useState('guitar')
    
    let instrumentsList = []
    for (const prop in instruments) {
        instrumentsList.push(prop)
    }


    let numberOfFrets = 13;
    let numberOfStrings = instruments[instrument].numStrings;


    const openStrings = instruments[instrument].openStrings//['E', 'B', 'G', 'D', 'A', 'E']

    //STILL NEED TO FIGURE OUT HOW TO CHANGE CSS STRINGS VARIABLE
    
    document.documentElement.style.setProperty(`--number-of-strings`, numberOfStrings.toString())
    // useEffect(() => {
        
    //     document.documentElement.style.setProperty(`--number-of-strings`, numberOfStrings.toString())
        
    // }, [])

    //find the right scale and pass it to component
    let scaleProp = getScalesNotes(root, scale)
    
    return (
        <div>
            
            <h1>Guitar Scalr</h1>
            <Controller
                scaleNames = {scaleNames}
                setScale={setScale}
                root={root}
                setRoot={setRoot}
                instruments={instrumentsList}
                setInstrument={setInstrument}
            />
            <Fretboard
                numberOfStrings={numberOfStrings}
                numberOfFrets={numberOfFrets}
                openStrings={openStrings}
                scale={scaleProp}
            />
            <PlayScale
                scale={scaleProp}
            />
        </div>   
    )
};
