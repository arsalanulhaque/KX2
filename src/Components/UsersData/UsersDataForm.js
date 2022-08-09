import { React, useState } from "react";
import style from "./UsersData.module.css";
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'

const modalStyle = {
  backgroundColor: 'white',
  width: '700px',
  marginLeft: '-60px',
  borderRadius: '8px'

}

const UsersDataForm = ({ show, handleClose, addRows, rowSelected, currentCustomer }) => {
  const [firstName, setFirstName] = useState(currentCustomer.name);
  const [lastName, setLastName] = useState(rowSelected ? currentCustomer.lastName : '');
  const [email, setEmail] = useState(rowSelected ? currentCustomer.email : '');
  const [phoneNum, setPhoneNum] = useState(rowSelected ? currentCustomer.phoneNum : '');
  const [fullAddress, setFullAddress] = useState(rowSelected ? currentCustomer.fullAddress : '');
  const [ethnicity, setEthnicity] = useState(rowSelected ? currentCustomer.ethnicity : '');

  const showData = () => {
    console.log(rowSelected)
    console.log(currentCustomer);
  }

  const handleFNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const transferValue = () => {
    console.log(currentCustomer);
    setFirstName(currentCustomer.name)
    const val = {
      firstName: currentCustomer.name,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      fullAddress: fullAddress,
      ethnicity: ethnicity
    };
    console.log(val);
    console.log("hey");
    addRows(val);
  };


  return (
    <>
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} >
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ marginTop: '15px', borderRadius: '8px' }}
          >
            <div style={modalStyle}>
              <Modal.Header closeButton>
                <Modal.Title>Customer Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={rowSelected ? currentCustomer.name : ''}
                      // onChange={(event) => setFirstName(event.target.value)} 
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name"
                        onChange={(event) => setLastName(event.target.value)} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"
                        value={rowSelected ? currentCustomer.email : ''}
                        onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number"
                        value={rowSelected ? currentCustomer.phone_no : ''}
                        onChange={(event) => setPhoneNum(event.target.value)} />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Full Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"
                      value={rowSelected ? currentCustomer.address : ''}
                      onChange={(event) => setFullAddress(event.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Ethnic Monitoring</Form.Label>
                    <Form.Control type="text" placeholder="Enter ethnicity"
                      value={rowSelected ? currentCustomer.ethnic_monitoring : ''}
                      onChange={(event) => setEthnicity(event.target.value)} />
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group> */}
                  {/* 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row> */}

                  {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />

  </Form.Group> */}

                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button className="py-2 px-5" style={{ backgroundColor: '#f12711' }} onClick={() => { transferValue(); handleClose(); }}>
                  SAVE
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  CLOSE
                </Button>
                {/* <Button variant="primary">ADD</Button> */}
              </Modal.Footer>
            </div>
          </Modal>
        </div>
      </main>
    </>
  )
}

export default UsersDataForm;