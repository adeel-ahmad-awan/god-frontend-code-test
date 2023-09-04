import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const CarNavbar = ({ selectedBodyType, onSelectBodyType }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Filter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form className='d-flex'>
            <Form.Group controlId="bodyTypeSelect" className=" car_nav_form_group">
              <Form.Label>Body Type:</Form.Label>
              <FormControl as="select" value={selectedBodyType} onChange={onSelectBodyType}>
                <option value="all">All</option>
                <option value="sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="estate">Estate</option>
              </FormControl>
            </Form.Group>
          </Form>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CarNavbar;