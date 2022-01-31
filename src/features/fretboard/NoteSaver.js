import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToneComponent } from '../toneGenerator/ToneComponent';
export const NoteSaver = ({ savedNotes, setSavedNotes }) => {
    const playSavedClickHandler = () => {
        ToneComponent.playSavedNotes(savedNotes)
    }

    const clearSavedNotes = () => {
        setSavedNotes([])
    }

    const clearLastSavedNotes = () => {
        let tempArray = savedNotes
        tempArray.pop()
        console.log(tempArray)
        setSavedNotes([...tempArray])
    }

    return (
        <Row className='note-saver'>
            <h2>Click notes to save!</h2>
            <Button onClick={playSavedClickHandler}>Play!</Button>
            <Button variant="warning" onClick={clearLastSavedNotes}>Clear Previous Note</Button>
            <Button variant="danger" onClick={clearSavedNotes}>Clear Notes</Button>
            {savedNotes.map(x => <Col key={x} value={x} default>{x}</Col>)}
        </Row>
    );
};
