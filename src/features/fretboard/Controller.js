import React from 'react';
import stylecss from './Controller.css'
export const Controller = ({ scales, setScale, scaleNames, root, setRoot, instruments, setInstrument }) => {
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E','F','F#','G','G#'] 

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
            <form onChange={instrumentChangeHandler}>
                <label>Instruments: </label>
                <select>
                    {instruments.map(x => <option value={x} default>{x}</option>)}
                </select>
            </form>
            <form onChange={rootChangeHandler}>
                <label>Root: </label>
                <select>
                    <option></option>
                    {notes.map(x => <option value={x}>{x}</option>)}
                </select>
            </form>
            <form onChange={scaleChangeHandler}>
                <label>Scale: </label>
                <select>
                    <option></option>
                    {scaleNames.map(x => <option value={x}>{x}</option>)}
                </select>
            </form>
            <div>Key: <span className='root-color-sample'>Root</span> <span className='note-color-sample'>Note</span></div>
        </section>
      
    )
};
