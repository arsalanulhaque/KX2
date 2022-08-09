import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Pages/Dashbord";
import Signin from "./Pages/Signin/index";
import UsersData from "./Components/UsersData/UsersData";
import WarehouseDetails from "./Components/Warehouses/WarehouseDetails";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<UsersData />} />
          <Route path="/warehouses" element={<WarehouseDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
