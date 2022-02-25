import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import DemoTable from "./components/TableView/DemoTable";
import Navbar from "./components/SideNavbar/Navbar";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Admin/Admin";
import AdminTableView from "./components/TableView/AdminTableView";
import UserTable from "./components/TableView/UserTable";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createticket" element={<CreateTicket />} />
          <Route path="/demotable" element={<DemoTable />} />
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path='/admin' element={<Admin />} />
          <Route path='/admintable' element={<AdminTableView />} />
          <Route path="/userlist"  element={<UserTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
