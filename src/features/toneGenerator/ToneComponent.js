import React from 'react';
import * as Tone from 'tone'

export class ToneComponent {
    
    //play a middle 'C' for the duration of an 8th note

    static toneStart = async (note, noteLength = '8n') => {
        let synth = new Tone.Synth().toDestination()
        synth.triggerAttackRelease(note, noteLength);
        await Tone.start()
    }

    static playSavedNotes = async (savedNotes) => {
        const synth = new Tone.Synth().toDestination();
        let now = Tone.now()
        for (let tone of savedNotes) {
            synth.triggerAttackRelease(tone, "8n", now)
            now += .5
        }
    }
};
