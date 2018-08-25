import React , { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './../components/Login'

export default class Routers extends Component {
   render(){
      return(
         <div>
            <Route path="/" exact component={Login}/>
         </div>
      );
   }
}