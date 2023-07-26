/**
 * The `Nav_bar` function returns a React component that renders a navigation bar with a logo, menu
 * links, a search bar, and user icons.
 * @returns The `Nav_bar` function is returning a JSX element, which represents the navigation bar
 * component.
 */
import React from 'react';
import  Image  from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav_bar() {
  return (
    <>
     <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary  ">
        <Image src={require("../images/ethereum-nft.png")} roundedCircle width={"45px"} />
          <Navbar.Brand href="#" className='fw-bold ms-1'>
            <span className='text-danger'>E</span>
            <span className='text-primary'>da</span>
            <span className='text-danger'>Face</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '500px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Product</Nav.Link>
              <Nav.Link href="#action3">Express</Nav.Link>
              <Nav.Link href="#action4">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
            <div className="d-flex justify-content-center"> 
              <Nav.Link href="#person"><i className="bi bi-person-circle ms-4 text-danger"></i></Nav.Link>
              <Nav.Link href="#wallet"><i className="bi bi-wallet-fill ms-4  text-danger"></i></Nav.Link>
            </div>
          </Navbar.Collapse>
      </Navbar>
        </Container>
    </>
  );
}

export default Nav_bar;
