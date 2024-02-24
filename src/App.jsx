import { useState } from 'react'
import './App.css';
import './App.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Form, FormGroup, FormLabel, Card, AlertHeading } from 'react-bootstrap';

function App() {
  return (
    <>
    <Col id="drum-machine">
      <Row class="settingsBar">
        <div id="volume-wrapper">
          <FormGroup>
            <FormLabel>Volume</FormLabel>
            <Form.Range id="volume" defaultValue="50"></Form.Range>
          </FormGroup>
        </div>
      </Row>
      <Row>
          <Alert id="display" variant="info">
            <AlertHeading>Hey, nice to see you</AlertHeading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things
              nice and tidy.
            </p>
          </Alert>
      </Row>
      
        
        <Row>
          <h1>DrumPad</h1>
        </Row>
        <Row>
          <ButtonGroup size="lg">
            <Button className="drum-pad" variant="warning" id="sticks">Q<audio type="audio/wav" src="sticks.wav" href="src/assets/sticks.wav" id="q"></audio></Button>
            <Button className="drum-pad" variant="danger" id="hihat">W<audio type="audio/wav" src="ZildMstrsnd-HiHat0.wav" href="src/assets/ZildMstrsnd-HiHat0.wav" id="w"></audio></Button>
            <Button className="drum-pad" variant="primary" id="crash">E<audio type="audio/wav" src="ZildjinCrsh 1-Dyn09.wav" href="src/assets/ZildjinCrsh 1-Dyn09.wav" id="e"></audio></Button>

          </ButtonGroup>

        </Row>
        <Row>
          <ButtonGroup>
            <Button className="drum-pad" variant="primary" size="lg" id="ride">A <audio type="audio/wav"id="a" src="SabHHXEvo20_Bell05.wav" href="src/assets/SabHHXEvo20_Bell05.wav"></audio></Button>
            <Button className="drum-pad" variant="info" id="snare" size="lg">S <audio type="audio/wav" id="s" src="drum_snare_hard.wav" href="src/assets/drum_snare_hard.wav"></audio></Button>
            <Button className="drum-pad" variant="danger" id="bass" size="lg">D <audio type="audio/wav" id="d" src="drum_bass_hard.wav" href="src/assets/drum_bass_hard.wav"></audio></Button>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup size="lg">
            <Button className="drum-pad" variant="info" id="lowtom">Z <audio type="audio/wav" src="drum_tom_lo_hard.wav" id="z" href="src/assets/drum_tom_lo_hard.wav" ></audio></Button>
            <Button className="drum-pad" variant="warning" id="midtom">X <audio type="audio/wav" src="drum_tom_mid_hard.wav" id="x" href="src/assets/drum_tom_mid_hard.wav"></audio></Button>
            <Button className="drum-pad" variant="primary" id="hitom">C <audio type="audio/wav" src="drum_tom_hi_hard.wav" id="c" href="src/assets/drum_tom_hi_hard.wav"></audio></Button>
          </ButtonGroup>
        </Row>




      </Col>


    </>
  )
}

export default App
