import React, {useEffect} from 'react';
import stylecss from './Fretboard.css'
import { Controller } from './Controller';
import { ToneComponent } from '../toneGenerator/ToneComponent'

export const Fretboard = (props) => {
    
    const { numberOfFrets, numberOfStrings, openStrings, scale, playTone } = props;
    
    //const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const notes = ['C2', 'C#2', 'D2','E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4','C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5','C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6']

    const getNote = (start, index) => {
        let startIndex = notes.indexOf(start)

        if (startIndex + index >= notes.length) {
            startIndex = Math.abs(((notes.length) - startIndex - index))
            return notes[startIndex]
        }

        return notes[startIndex + index]
    }

    const toneClickHandler = (e) => {
        const note = e.target.getAttribute("value")
        ToneComponent()(note)
    }

    const setupFrets = (stringNum, startNote) => {
        let frets = []
        for (let i = 0; i < numberOfFrets + 1; i++) {
            let note = getNote(startNote, i)
            let root = scale[0]
            let inScale = false
            if (scale.includes(note.slice(0, -1))) inScale = true
            console.log(root, note)

            if (stringNum === 0) {
                if ([3, 5, 7, 9].includes(i)) {
                    frets.push(<div onClick={toneClickHandler} value={note} className={`note-fret single-fretmark ${inScale ?'show-note': ''} ${(note.slice(0, -1) === root) ? 'root-style': '' }`} date-note={note}></div>)
                } else if ((i) === 12) {
                    frets.push(<div onClick={toneClickHandler} value={note} className={`note-fret ${inScale ?'show-note': ''} ${(note.slice(0, -1) === root) ? 'root-style': '' }`} date-note={note}><div className='double-fretmark'></div></div>)
                } else {
                    frets.push(<div onClick={toneClickHandler} value={note} className={`note-fret ${inScale ?'show-note': ''} ${(note.slice(0, -1) === root) ? 'root-style': '' }`} date-note={note}></div>)
                
                }
            } else {
                    frets.push(<div onClick={toneClickHandler} value={note} className={`note-fret ${inScale ?'show-note': ''} ${(note.slice(0, -1) === root) ? 'root-style': '' }`} date-note={note}></div>)
                
            }
        }
        return frets
    }


    const setupFretboard = () => {
        let strings = []
        for (let i = 0; i < numberOfStrings; i++) {
            strings.push(<div className='string'>{ setupFrets(i, openStrings[i])}</div>) //pass string num becuase we need to add special class for marks on the first set of strings
        }

        return strings
    }

   

    return (
        <section>
            <div className='fretboard'>
                {setupFretboard()}
            </div>
            
        </section>
        
    )
};
