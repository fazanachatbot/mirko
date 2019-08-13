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
      <Navbar sticky='top'>
        <Nav.Item>
          M.Ljubic, 2019 - 2020
        </Nav.Item>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Button variant='outline-info'>About</Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant='outline-info'>Feedback</Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant='outline-info'>EN</Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant='outline-info'>DE</Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
};
