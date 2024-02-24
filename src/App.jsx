import { useState } from 'react'
import './App.css';
import './App.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';

function App() {
  const [volume, setVolume] = useState(0)

  const initialVolume = document.getElementById("volume").defaultValue

  return (
    <>
      <div class="settingsBar">
        <div id="volume-wrapper">
          <FormGroup>
            <FormLabel>Volume</FormLabel>
            <Form.Range id="volume" defaultValue="50" currentValue={null}></Form.Range>
          </FormGroup>

        </div>
      </div>
      <Col id="drum-machine">
        <Row>
          <h1>DrumPad</h1>
        </Row>
        <Row>
          <ButtonGroup size="lg">
            <Button className="drum-pad" variant="warning" size="lg" id="sticks">
              Q
              <audio href="src/assets/sticks.wav" id="q"></audio>
            </Button>
            <Button className="drum-pad" variant="danger" size="lg" id="hihat">W <audio href="src/assets/drum_cymbal_pedal.wav" id="w"></audio></Button>
            <Button className="drum-pad" variant="primary" size="lg" id="splash">E <audio href="src/assets/drum_splash_hard.wav" id="e"></audio></Button>

          </ButtonGroup>

        </Row>
        <Row>
          <ButtonGroup>
            <Button className="drum-pad" variant="primary" size="lg" id="ride">A <audio id="a"></audio></Button>
            <Button className="drum-pad" variant="info" id="snare" size="lg">S <audio id="s" href="src/assets/drum_snare_hard.wav"></audio></Button>
            <Button className="drum-pad" variant="danger" id="bass" size="lg">D <audio id="d" href="src/assets/drum_bass_hard.wav"></audio></Button>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup size="lg">
            <Button className="drum-pad" variant="info" size="lg" id="lowtom">Z <audio id="z" href="src/assets/drum_tom_lo_hard.wav" ></audio></Button>
            <Button className="drum-pad" variant="warning" size="lg" id="midtom">X <audio id="x" href="src/assets/drum_tom_mid_hard.wav"></audio></Button>
            <Button className="drum-pad" variant="primary" size="lg" id="hitom">C <audio id="c" href="src/assets/drum_tom_hi_hard.wav"></audio></Button>
          </ButtonGroup>

        </Row>




      </Col>


    </>
  )
}

export default App
