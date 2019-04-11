import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
  render() {
    const style = {
      header: {
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      jumbotron: {
        textAlign: 'center',
      },
    };
    return (
      <Navbar bg="dark" variant="dark" style={style.header}>
        <Nav>
          <Navbar.Brand href="/">
            <h1>Clicker Game</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Nav>
        <Nav className="m-auto">
          <Navbar.Text>
            <h1>Click an image to begin!</h1>
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h1>Score:</h1>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
