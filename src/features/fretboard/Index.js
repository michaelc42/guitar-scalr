import React, { useState, useEffect }from 'react'
import { Controller } from './Controller'
import { Fretboard } from './Fretboard'
import stylesheet from './Index.css'
import { getScalesNotes, scaleNames } from '../../data/scales.js'
import logo from '../../logo.svg';
import { instruments, instrumentsList } from './appData/instrumentList'
import { NoteSaver } from './NoteSaver'

export const FretboardApp = () => {   
    const [scaleName, setScaleName] = useState('');
    const [root, setRoot] = useState('');
    const [instrument, setInstrument] = useState(instrumentsList[0])
    const [savedNotes, setSavedNotes] = useState([])

    //initial settings
    let numberOfFrets = 13;
    let numberOfStrings = instruments[instrument].numStrings;
    const openStrings = instruments[instrument].openStrings

    //Set root style for number of strings
    document.documentElement.style.setProperty(`--number-of-strings`, numberOfStrings.toString())

    //find the right scale and pass it to component
    let scaleNotes = getScalesNotes(root, scaleName)
    
    return (
        <div>
            
            <h1><img className="logo" src={logo} />Guitar Scalr</h1>
            <Controller
                scaleNames = {scaleNames}
                setScale={setScaleName}
                setRoot={setRoot}
                instruments={instrumentsList}
                setInstrument={setInstrument}
                scaleNotes={scaleNotes}
            />
            <Fretboard
                numberOfStrings={numberOfStrings}
                numberOfFrets={numberOfFrets}
                openStrings={openStrings}
                scale={scaleNotes}
                setSavedNotes={setSavedNotes}
                savedNotes={savedNotes}
            />
            <NoteSaver
                savedNotes={savedNotes}
                setSavedNotes={setSavedNotes}
            />
        </div>   
    )
};
