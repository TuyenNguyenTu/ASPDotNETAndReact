import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/employee';
const Employees = (props) => {
  // const [x,setX] = useState(0)
  // setX(5)
  useEffect(()=>{
    props.fetchAllEmployees()
  },[])//ComponentDidMount
  return (<div> Employees.Component</div>);
}
const mapStateToProps = state => ({    //reducers/employee
  EmployeeList: state.employee.list

});
const mapActionToProps = {
  fetchAllEmployees: action.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(Employees);
