import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import {store} from '../src/actions/store'
import EmployeeForm from './components/EmployeeForm';
import Employees from './components/Employee.Component';
function App() {
  return (
    <Provider store={store}>
      <EmployeeForm/>
      <Employees/>
    </Provider>
  );
}

export default App;
