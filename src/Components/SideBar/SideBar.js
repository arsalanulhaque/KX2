import React from "react";
import Logo from "../../Assets/Logo1.png";
import SideLogo from "../../Assets/sideLogo.png";
import Basket from "../../Assets/basket.png";
import bag from "../../Assets/bag.png";
import FB from "../../Assets/fb.png";
import Mail from "../../Assets/mail.png";
import Bell from "../../Assets/bell.png";
import SqFb from "../../Assets/squarefb.png";
import Message from "../../Assets/message.png";
import Home from "../../Assets/Home.png";
// import Home from "../../Assets/Home.png";
import style from "./Sidebar.module.css";
import Cards from "../Cards/Cards";
import GraphTemperature from "../GraphTemperature/GraphTemperature";
import Table from "../Table/Table";
import UsersData from "../UsersData/UsersData";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const LinkStyle= {
  textDecoration: 'none',
  color:'#000'
}


const SideBar = () => {
  return (
    <>
    <div className={style.sidebarParentDiv}>
      <div className={style.sidebarBox}>
        <section className={style.imgBox}>
          <img src={Logo} width="100%" />
        </section>
        {/* <section className={style.homeBox}>
          <div>
            <img src={Home} width="100%" />       
          </div>
          <p>Dashboard</p>
        </section> */}
        <section>
        <Link to="/customers" style={LinkStyle}>
          <section className={style.homeBox} style={{display:'flex', flexDirection:'column'}}>      
            <div style={{display:'flex', flexDirection:'row', marginLeft:'-160px'}}>
              <img src={bag} width="90%" />
              <p>Customers</p>
            </div>     
            
            
            <div className="submenu-list" style={{display:'flex', flexDirection:'column', width:'100%'}}>  
            <ul className="pl-3" style={{listStyleType:'none'}}>
              <li style={{margin:'10px 0px'}}>- Submenu Item 1</li>
              <li style={{marginBottom:'10px'}}>- Submenu Item 2</li>
              <li style={{marginBottom:'10px'}}>- Submenu Item 3</li>
              <li>- Submenu Item 4</li>
            </ul>
            </div>  
          </section>
          </Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      
         
         {/* <Link to="/warehouses" style={LinkStyle}>
          <section className={style.homeBox}>
            <div>
              <img src={Basket} width="90%" />
            </div>
            <p>Warehouses</p>
          </section>
          </Link> */}
          <Link to="/warehouses" style={LinkStyle}>
          <section className={style.homeBox} style={{display:'flex', flexDirection:'column'}}>      
            <div style={{display:'flex', flexDirection:'row', marginLeft:'-160px'}}>
              <img src={Basket} width="90%" />
              <p>Warehouses</p>
            </div>     
            
            
            <div className="submenu-list" style={{display:'flex', flexDirection:'column', width:'100%'}}>  
            <ul className="pl-3" style={{listStyleType:'none'}}>
              <li style={{margin:'10px 0px'}}>- Dashboard</li>
              <li style={{marginBottom:'10px'}}>- Volunteer Opportunities</li>
              <li style={{marginBottom:'10px'}}>- Inventory</li>
              <li>- Reports</li>
            </ul>
            </div>  
          </section>
          </Link>

      
          <section className={style.homeBox} style={{marginTop:'-30px'}}>
            <div>
              <img src={Basket} width="90%" />
            </div>
            <p>Food Schemes</p>
          </section>

          <section className={style.homeBox}>
            <div>
              <img src={Mail} width="90%" />
            </div>
            <p>Locations</p>
          </section>
        </section>

        <section className={style.homeBox}>
            <div>
              <img src={bag} width="90%" />
            </div>
            <p>Retailers</p>
          </section>

        {/* <section className={style.homeBox}>
          <div>
            <img src={Bell} width="85%" />
          </div>
          <p>Administration</p>
        </section> */}

        <Link to="/"  style={LinkStyle}>
            <section className={style.homeBox}>
              <div>
                <img src={Logo} width="90%" />
              </div>
              <p>Sign out</p>
            </section>
        </Link>
      </div>
    </div>
    </> 
  );
};

export default SideBar;
