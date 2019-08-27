import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Link from 'react-bootstrap/';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from './Images/logo_transparent.png';

function ModalDialog(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your feedback matters to us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tell me what you think about me down below!</h4>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your thoughts and opinions</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function getAuthorText() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <>
      <a
        href="https://github.com/voiys"
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        M. Ljubic{' '}
      </a>
      {currentYear > 2019 ? `2019 - ${currentYear}` : '2019'}
    </>
  );
}

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <style>
        {`
                :root {
                }
            `}
      </style>
      <Navbar bg="light" expand="sm">
        <NavbarBrand>
          <Image src={logo} width={128} alt="logo" title="logo" rounded />
        </NavbarBrand>
        <ButtonToolbar className="ml-auto">
          <Button variant="outline-dark" onClick={() => setModalShow(true)}>
            Feedback
          </Button>
        </ButtonToolbar>
      </Navbar>
      <main>Hi from main</main>
      <Navbar fixed="bottom" bg="dark">
        <Navbar.Text style={{ color: '#fff' }}>{getAuthorText()}</Navbar.Text>
        <Nav className="ml-auto">
          <Nav.Item
            as={Button}
            variant="outline-light"
            size="sm"
            className="mr-1"
          >
            English
          </Nav.Item>
          <Nav.Item as={Button} variant="outline-light" size="sm">
            Deutsch
          </Nav.Item>
        </Nav>
      </Navbar>
      <ModalDialog show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default App;
