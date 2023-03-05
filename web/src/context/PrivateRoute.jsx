import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {login} = useSelector((store) => store.auth);

  // console.log(login);

  if(login?.token){
    return children;
  }
  return <Navigate to="/login"/>
}

export default PrivateRoute;