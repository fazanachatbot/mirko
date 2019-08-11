import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default () => {
    return (
    <>
      <style type='text/css'>
        {`
          .navbar {
            background: transparent;
          }
          .btn {
            margin-right: 10px;
          }
        `}
      </style>
      <Navbar fixed='bottom'>
        <Nav.Item>
          M.Ljubic, 2019 - 2020
        </Nav.Item>
        <Nav className='ml-auto'>
          {
            ['About', 'Feedback', 'EN', 'DE'].map(
              (text, index) => (
              <Nav.Item key={index}>
                <Button variant='outline-info'>
                  {text}
                </Button>
              </Nav.Item>
              )
            )
          }
        </Nav>
      </Navbar>
    </>
  )
};
