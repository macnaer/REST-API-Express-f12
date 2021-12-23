import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Store 
import { Provider } from 'react-redux';
import store from "./store";

// Componnents
import DashBoard from './Components/Dashboard/Dashboard';

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
          </Routes>    
      </Router>
      </ApiStoreServiceProvider>
    </Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));