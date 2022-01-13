import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Store 
import { Provider } from 'react-redux';
import store from "./store";

// Componnents
import DashBoard from './Components/Dashboard/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';

// Hoc ApiService
import ApiService from './Services/ApiService';
import { ApiStoreServiceProvider } from './Components/Api-service-context/Api-service-context';
const apiService = new ApiService();


const App = () => {
  return(
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiService}>
        <Router>
          <Routes>  
            <Route path="/admin/dashboard" exact element={<DashBoard />}  />
            <Route path="/" exact element={<DashBoard />}  />
            <Route path="/login"  element={<LoginPage />} />
          </Routes>    
      </Router>
      </ApiStoreServiceProvider>
    </Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));