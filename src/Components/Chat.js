import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default () => {
  return (
    <>
      <style type='text/css'>
        {`
          .container {
            border: 2px solid black;
          }
        `}
      </style>
      <Container>
        <Form inline className=''>
          <Form.Group>
            <Form.Control  type='text' />
            <Button type='submit' onClick={(e) => {e.preventDefault(); console.log('sent')}}>Send</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};