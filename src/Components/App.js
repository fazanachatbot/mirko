import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import NavBar from './NavBar';


export default () => {
  useEffect(() => {
    document.body.style.background = 'whitesmoke';
  }, []);
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};
