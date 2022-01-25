import React from 'react';
import * as Tone from 'tone'

export const ToneComponent = () => {
        //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination(); 

    //play a middle 'C' for the duration of an 8th note

    const toneStart = async (note, noteLength = '8n') => {
        synth.triggerAttackRelease(note, noteLength);
        await Tone.start()
    }
    return toneStart
};
