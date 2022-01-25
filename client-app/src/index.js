import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Store
import { Provider } from "react-redux";
import { store } from "./store";

// Componnents
<<<<<<< HEAD
<<<<<<< HEAD
import DashBoard from './Components/Containers/Layout/Dashboard';
=======
import DashBoard from './Components/Dashboard/Dashboard';
import Registration from './Components/Registration/Registration'
>>>>>>> registration
import LoginPage from './Components/LoginPage/LoginPage';
=======
import LoginPage from "./Components/LoginPage/LoginPage";
>>>>>>> 8622ad5f091fab0529aa60578d00043270384c64
import DefaultLayout from "./Components/Containers/Layout/defaultLayout";
import Main from "./Components/Main/index";

import ChangePassword from "./Components/Profile/changePassword/index.js";
import Admin from "./Components/Admin/index";

import ProfilePage from "./Components/Profile/ProfilePage";

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8622ad5f091fab0529aa60578d00043270384c64
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
              <Route
                path="/adminPanel/profile/changePassword"
                element={<ChangePassword />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
<<<<<<< HEAD
=======
        <Router>
          <Routes>  
            <Route path="/admin/dashboard" exact element={<DashBoard />}  />
            <Route path="/" exact element={<DashBoard />}  />
            <Route path="/register" element={<Registration />} />
            <Route path="/login"  element={<LoginPage />} />
          </Routes>    
      </Router>
>>>>>>> registration
=======
>>>>>>> 8622ad5f091fab0529aa60578d00043270384c64
      </ApiStoreServiceProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
