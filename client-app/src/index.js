<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Store
import { Provider } from "react-redux";
import store from "./store";

// Componnents
import DashBoard from "./Components/Dashboard/Dashboard";
import LoginPage from "./Components/LoginPage/LoginPage";
import ProfilePage from "./Components/Profile/ProfilePage";

// Hoc ApiService
import ApiService from "./Services/ApiService";
import { ApiStoreServiceProvider } from "./Components/Api-service-context/Api-service-context";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Store 
import { Provider } from 'react-redux';
import {store} from "./store";

// Componnents
import DashBoard from './Components/Containers/Layout/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';
import DefaultLayout from "./Components/Containers/Layout/defaultLayout";
import Main from "./Components/Main/index";
import Admin from "./Components/Admin/index"

// Hoc ApiService
import ApiService from './Services/ApiService';
import { ApiStoreServiceProvider } from './Components/Api-service-context/Api-service-context';
import Dashboard from './Components/Containers/Layout/Dashboard';
const apiService = new ApiService();
>>>>>>> DEV

const apiService = new ApiService();

const App = () => {
  return (
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiService}>
<<<<<<< HEAD
        <Router>
          <Routes>
            <Route path="/admin/dashboard" exact element={<DashBoard />} />
            <Route path="/" exact element={<DashBoard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </ApiStoreServiceProvider>
    </Provider>
  );
};
=======
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" exact element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/adminPanel" element={<Dashboard />}>
              <Route path="/adminPanel/admin" exact element={<Admin />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </ApiStoreServiceProvider>
    </Provider>
  );
}

>>>>>>> DEV

ReactDOM.render(<App />, document.getElementById("root"));
