import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default ({ user }) => {
   return user ? (
      <Row>
         <Col>bot message</Col>
      </Row>
   ) : (
      <Row className="d-flex justify-content-end">
         <Col className="text-right bg-danger rounded">user sent something</Col>
      </Row>
   );
};
