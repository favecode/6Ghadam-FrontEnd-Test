// React
import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Helpers
import { apiFunctions } from './../helpers'

// Constants 
import { textsConstants } from './../constants'

// Public
import logo from './../public/img/logo.png'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import {
   TextField,
   Button,
   Paper,
   Grid,
   Typography,
} from '@material-ui/core';

// Components
class Login extends Component {
   render() {
      return (
         <div>Login</div>
      );
   }
}
export default withStyles(styles)(connect()(Login)) 