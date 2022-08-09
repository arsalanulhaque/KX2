import React from "react";
import Cards from "../../Components/Cards/Cards";
import SideBar from "../../Components/SideBar/SideBar";
import GraphTemperature from "../../Components/GraphTemperature/GraphTemperature";
import Table from "../../Components/Table/Table";
import TopBar from '../../Components/SideBar/TopBar';


const Dashboard = () => {
  return (

    <div className="container-fluid" >
      <div className="row no-gutters" >
        <div class="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <div className="row ">
            <div class="col">
              <TopBar text="Dashboard"/>
            </div>
          </div>
          <div className="row ">
            <div class="col">
              <Cards />
            </div>
          </div>
          {/* <div className="row mb-4">
            <div className="col">
              <GraphTemperature />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <Table />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard