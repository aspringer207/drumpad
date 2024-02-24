import { useState } from 'react'
import './App.css';
import './App.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Col>
      <Row>
       <h1>DrumPad</h1>
      </Row>
        <Row>
          <ButtonGroup size="lg">
<Button variant="warning" size="lg">Sticks</Button>
        <Button variant="danger" size="lg">Hi-Hat</Button>
        <Button variant="info" size="lg">Crash</Button>
        <Button variant="primary" size="lg">Ride</Button>
          </ButtonGroup>
        
        </Row>
        <Row>
          <ButtonGroup>
        <Button variant="primary" size="lg">Bass</Button>
        <Button variant="danger" size="lg">Snare</Button>
        </ButtonGroup>
        </Row>
        <Row>
        <ButtonGroup size="lg">
          <Button variant="info" size="lg">Mid Tom</Button>
        <Button variant="warning" size="lg">Hi Tom</Button>
        <Button variant="primary" size="lg">Floor Tom</Button>
        </ButtonGroup>
        
        </Row>
        
        
        
        
      </Col>
      
      
    </>
  )
}

export default App
