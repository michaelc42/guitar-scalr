import React from 'react';
import { PlayScale } from '../toneGenerator/PlayScale';
import stylecss from './Controller.css'
import { getScalesNotes, scaleNames } from '../../data/scales.js'
import { NOTES } from './appData/Notes'
import { Form, Container, Row, Col } from 'react-bootstrap';

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
        <Container className='controller'>
            <h2>CONTROLLER</h2>
                <Row>
                    <Col>    
                
                        <Form.Select onChange={instrumentChangeHandler} aria-label="Default select example">
                            {instruments.map(x => <option key={x} value={x} default>{x}</option>)}
                        </Form.Select>
                    
                    </Col>
                    <Col>
                            <Form.Select onChange={rootChangeHandler} aria-label="Default select example">
                                    <option>Select Root</option>
                                    {NOTES.map(x => <option key={x} value={x}>{x}</option>)}
                            </Form.Select>
                            <Form.Select className="mt-2" onChange={scaleChangeHandler} aria-label="Default select example">
                                    <option>Select Scale</option>
                                    {scaleNames.map(x => <option key={x} value={x}>{x}</option>)}
                            </Form.Select>
                            <PlayScale
                                scale={scaleNotes}
                            />
                    </Col>
                    <Col>
                    <div className="key-style">Key: <span className='root-color-sample'>Root</span> <span className='note-color-sample'>Note</span></div>
                    <div className="mt-3">
                        <div><h5>Directions:</h5></div>
                        <div>-Default instrument is guitar.</div>
                        <div>-Pick a root and pick a scale.  Hit play to hear it!</div>
                    </div>
                    </Col>
                </Row>
        </Container>
      
    )
};
