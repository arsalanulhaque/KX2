import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./UsersData.module.css";
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import SideBar from "../SideBar/SideBar";
import TopBar from '../SideBar/TopBar';
import UsersDataForm from "./UsersDataForm";
import BootstrapTable from 'react-bootstrap-table-next';
import contentStyle from "../SideBar/Sidebar.module.css";
import { baseUrl } from "../../APIs/APIStorage";
import Axios from "axios";

const customerData = [
  { id: 1, firstName: 'George', lastName: 'Blake', email: '@gmail.com', phoneNum: '02348', fullAddress: 'ABC Street', ethnicity: 'Asian' },
  { id: 2, firstName: 'Jessica', lastName: 'Howard', email: '@yahoo.com', phoneNum: '02348', fullAddress: 'XYZ Street', ethnicity: 'White-British' },
  { id: 3, firstName: 'Ronald', lastName: 'Mendes', email: '@hotmail.com', phoneNum: '02348', fullAddress: 'ABC Street', ethnicity: 'Asian' }
];

const UsersData = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    console.log(currentCustomer.name)
  }
  const handleShow = () => {
    setShow(true);
    console.log(usersArray);
  }
  const [rowSelected, setRowSelected] = useState(false);
  const [customers, setCustomers] = useState(customerData);
  let initialCustomerData = { id: null, firstName: '', lastName: '', email: '', phoneNum: '', fullAddress: '', ethnicity: '' };
  const [currentCustomer, setCurrentCustomer] = useState({});


  const columns = [
    {
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'email',
      text: 'Email'
    },
    {
      dataField: 'status',
      text: 'Status'
    },
    {
      dataField: 'created_at',
      text: 'Created At'
    }
  ];

  // Axios.get(url, {
  //   headers: {
  //     'Authorization': `token ${access_token}`
  //   }
  // })
  // .then((res) => {
  //   console.log(res.data)
  // })
  // .catch((error) => {
  //   console.error(error)
  // })


  // useEffect(async() => {
  //   const apiResponse = await fetch('http://18.169.241.94:4000/api/v1/users');
  //   const apiResponseJSON = await apiResponse.json()
  //   console.log(apiResponseJSON.results.data);
  // }, [])

  const url = "http://18.130.223.183:4000/api/v1/users";
  const fetchData = async () => {
    Axios.get(url)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.results.data);
        setUsersArray(response.data.results.data);
      })
      .catch(error => console.error(`Error:${error}`))
  }

  //   //   GET USERS DATA
  // const getData = () => {   
  //    Axios.get(url). then(
  //     (response) => {
  //       console.log(response);
  //       console.log(response.data);
  //       console.log(response.data.results.data);
  //       setUsersArray(response.data.results.data);

  //     })
  //     .catch(error => console.error(`Error:${error}`))
  //   }

  useEffect(() => {
    fetchData();
  });

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
      console.log(row);
      setShow(true);
      setRowSelected(true);
      setCurrentCustomer(row);
      // <UsersDataForm show={show} handleClose={handleClose}/>
    },
    // onMouseEnter: (e, row, rowIndex) => {
    //   console.log(`enter on row with index: ${rowIndex}`);
    // }
  };

  // const displayData = (e, row, rowIndex) => {
  //   console.log(`clicked on row with index: ${rowIndex}`);
  //       console.log(row);
  //       setShow(true);   
  //       setClickedUser(row);
  // }

  const addRows = (data) => {
    const updatedCustomers = [...customers];
    let found = false;
    updatedCustomers.forEach((obj, index) => {
      if (obj.id === data.id) {
        updatedCustomers[index] = data;
        console.log(updatedCustomers[index]);
        found = true;
        console.log("hello");
      }
    });
    if (found === false) {
      const totalCustomers = customers.length;
      data.id = totalCustomers + 1;
      updatedCustomers.push(data);
      console.log(updatedCustomers);
    }
    setCustomers(updatedCustomers);
  };


  return (
    <div className="container-fluid" >
      <div className="row" >
        <div class="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="row ">
            <div className="col">
              <TopBar text="Customers" />
              <UsersDataForm show={show} handleClose={handleClose} addRows={addRows} rowSelected={rowSelected} currentCustomer={currentCustomer} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="content">
                <BootstrapTable keyField='id' data={usersArray} columns={columns} rowEvents={rowEvents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default UsersData;