import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
<<<<<<< HEAD
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 01354044ae604521d08ab54cdf662d6661713c87

// Store
import { Provider } from "react-redux";
import { store } from "./store";

// Componnents
<<<<<<< HEAD
import DashBoard from './Components/Containers/Layout/Dashboard';
// import DashBoard from './Components/Dashboard/Dashboard';
import Registration from './Components/Registration/Registration'
import LoginPage from './Components/LoginPage/LoginPage';
import DefaultLayout from "./Components/Containers/Layout/defaultLayout";
import Main from "./Components/Main/index";
import Admin from "./Components/Admin/index"
=======
import LoginPage from "./Components/LoginPage/LoginPage";
import DefaultLayout from "./Components/Containers/Layout/defaultLayout";
import Main from "./Components/Main/index";

import Admin from "./Components/Admin/index";
import Registration from "./Components/Registration/Registration";

import Admin from "./Components/Admin/index";
import ProfilePage from "./Components/Profile/ProfilePage";
>>>>>>> 01354044ae604521d08ab54cdf662d6661713c87

// Hoc ApiService
import ApiService from "./Services/ApiService";
import { ApiStoreServiceProvider } from "./Components/Api-service-context/Api-service-context";
import Dashboard from "./Components/Containers/Layout/Dashboard";
import UserList from "./Components/UserList/Userlist";
const apiService = new ApiService();

const App = () => {
  return (
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiService}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" exact element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/adminPanel" element={<Dashboard />}>
              <Route path="/adminPanel/admin" exact element={<Admin />} />

              <Route path="/adminPanel/userList" element={<UserList />} />

              <Route path="/adminPanel/userList" element={<UserList />} />
              <Route path="/adminPanel/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Router>
          <Routes>  
            <Route path="/admin/dashboard" exact element={<DashBoard />}  />
            <Route path="/" exact element={<DashBoard />}  />
            <Route path="/register" element={<Registration />} />
            <Route path="/login"  element={<LoginPage />} />
          </Routes>    
      </Router>
      </ApiStoreServiceProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
