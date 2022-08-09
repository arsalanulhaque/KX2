import React from 'react';
import SideBar from "../SideBar/SideBar";
import TopBar from '../SideBar/TopBar';
import style from "../UsersData/UsersData.module.css";
import { Form, Button, Row, Col } from 'react-bootstrap'
import warehouseStyle from "./warehouseStyle.css";


const WarehouseDetails = () => {
  return (
    <>
      <main>
        <SideBar />
        <TopBar />
      </main>
      <div className={style.content}>
        <div className={style.headingDiv}>
          <h2>Warehouse Details</h2>
        </div>
          <div className={style.content}>
          <div style={{ marginTop: '50px' }}>
            <Form className={style.content}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Warehouse Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Warehouse Address"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Telephone Number"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Company Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Company Number"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Charity Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Charity Number"
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                ADD WAREHOUSE
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )

}

export default WarehouseDetails;