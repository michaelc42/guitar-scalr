import React from 'react';
import * as Tone from 'tone'
import { Button } from 'react-bootstrap';

export const PlayScale = ({ scale }) => {
    const synth = new Tone.Synth().toDestination();
    const playScaleClickHandler = () => {
        let now = Tone.now()
        let toneMod = 2
        let originalToneMod = 2
        let shiftFlag = false
        for (let note of scale) {
            if (((scale[0] !== 'C#' && note === 'C') || (scale[0] !== 'C' && note === 'C#')) && !shiftFlag) {
                ++toneMod
                shiftFlag = true
            } 
            if (note === 'C' && scale[0] ==='C#') (++toneMod)
            synth.triggerAttackRelease(`${note}${toneMod}`, "8n", now)
            now += .5
        }
        if (shiftFlag) originalToneMod += 1
        if(scale[0] === 'C' || scale[0] === 'C#') originalToneMod += 1
        synth.triggerAttackRelease(`${scale[0]}${originalToneMod}`, "8n", now)
        
    }

    let returnElement = () => {
        if (scale.length === 0) {
            return <Button className="mt-2" onClick={playScaleClickHandler} variant="warning" disabled>Pick a Scale</Button>
        }
        return <Button className="mt-2" onClick={playScaleClickHandler} variant='success'>Play Scale</Button>
    }
    return (
        <div className='play-button'>
            {returnElement()}
        </div>
    )
};
