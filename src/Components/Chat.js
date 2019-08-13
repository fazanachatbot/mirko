import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Message from './Message';

/**
 * TODO:
 * dodati responsive breakpoint za visinu chata
 */

export default () => {
   return (
      <>
         <style type="text/css">
            {`
          .container {
            border: 2px solid black;
          }

          #message-container {
            height: 550px;
            margin-bottom: 10px;
            overflow: auto;
            scroll-behaviour: smooth;
          }
        `}
         </style>
         <Container className="shadow p-3">
            <Container id="message-container">
               <Message user />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message user />
               <Message user />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message user />
               <Message user />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message user />
               <Message user />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message />
               <Message user />
               <Message />
               <Message user />
            </Container>
            <Form>
               <Row>
                  <Col>
                     <Form.Control type="input" />
                  </Col>
                  <Button
                     type="submit"
                     className="float-right"
                     variant="info"
                     onClick={e => e.preventDefault()}
                  >
                     Send
                  </Button>
               </Row>
            </Form>
         </Container>
      </>
   );
};
