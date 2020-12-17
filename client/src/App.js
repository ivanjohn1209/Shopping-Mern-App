import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './compoents/AppNavbar';
import ShoppingList from './compoents/ShoppingList';
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div>
        <AppNavbar/>
        <ShoppingList/>
       </div>
      </Provider>
    );
  }
}

export default App;