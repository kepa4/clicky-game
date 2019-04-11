import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
  const style = {
    jumbotron: {
      textAlign: 'center',
    },
  };
  return (
    <Jumbotron style={style.jumbotron}>
      <h1>Clicker Game</h1>
      <br />
      <h2>
        Click on an image to earn points, but you can't click on an image more
        than once
      </h2>
    </Jumbotron>
  );
}

export default Header;