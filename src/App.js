import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers/Headers';
import Shop from './components/Headers/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Aboute from './Aboute/Aboute';

export const LogedInContext=createContext();
function App() {
  const [LogedInUser,setLogedInuser]=useState({})
  return (
    <LogedInContext.Provider value={[LogedInUser,setLogedInuser]}>
      <Router>
      <Headers></Headers>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path='/about'>
            <Aboute></Aboute>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/product/:productKey'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </LogedInContext.Provider>
  );
}

export default App;
