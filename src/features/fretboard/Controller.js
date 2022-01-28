import React from 'react';
import { PlayScale } from '../toneGenerator/PlayScale';
import stylecss from './Controller.css'
import { getScalesNotes, scaleNames } from '../../data/scales.js'
import { NOTES } from './appData/Notes'

export const Controller = ({setScale, scaleNames, root, setRoot, instruments, setInstrument, scaleNotes }) => {

    const scaleChangeHandler = (e) => {
        setScale(e.target.value)
    }

     const rootChangeHandler = (e) => {
        setRoot(e.target.value)
    }

    const instrumentChangeHandler = (e) => {
        setInstrument(e.target.value)
    }

    return (
        <section className='controller'>
            <h2>CONTROLLER</h2>
            <section>
                
                <div className='instrument-controller'>
                    <form onChange={instrumentChangeHandler}>
                        <label>Instruments: </label>
                        <select>
                            {instruments.map(x => <option value={x} default>{x}</option>)}
                        </select>
                    </form>
                </div>
                <div className='scale-controller'>
                    <form onChange={rootChangeHandler}>
                        <label>Root: </label>
                        <select>
                            <option></option>
                            {NOTES.map(x => <option value={x}>{x}</option>)}
                        </select>
                    </form>
                    <form onChange={scaleChangeHandler}>
                        <label>Scale: </label>
                        <select>
                            <option></option>
                            {scaleNames.map(x => <option value={x}>{x}</option>)}
                        </select>
                    </form>
                    <PlayScale
                        scale={scaleNotes}
                    />
                </div>

                <div className="key-style">Key: <span className='root-color-sample'>Root</span> <span className='note-color-sample'>Note</span></div>
            </section>
        </section>
      
    )
};
