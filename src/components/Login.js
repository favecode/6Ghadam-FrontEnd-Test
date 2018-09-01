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

// Styles
const styles = theme => ({
   Paper: {
      padding: '1rem 2rem 2rem',
      marginTop: '1rem',
      borderRadius: '.6rem',

   },
   Button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      fontFamily: 'iranSans',
      padding: '.1rem 2rem',
      borderRadius: '3rem',
      marginTop: '1rem',

   },
   GridItem: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '10vh'
   },
   Input: {
      fontFamily: 'iranSans',
      borderColor: 'gray'
   },
   Header: {
      color: '#222',
      fontFamily: 'iranSans',
      paddingBottom: '1rem'
   }
})

// Components
class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   handleChange = (element) => {
      let { value , dataset } = element.target
      this.setState({
         [dataset.type] : value
      })
   }
   render() {
      const { classes } = this.props
      return (
         <Fragment>
            <Grid container dir="rtl" justify="center">
               <Grid item sm={4} className={classes.GridItem}>
                  <img src={logo} width="150" />
                  <Paper className={classes.Paper}>
                     <Typography variant="title" className={classes.Header} align="center">
                        {textsConstants.LoginHeader}
                     </Typography>
                     <TextField fullWidth margin="normal" inputProps={{ 'data-type': 'email' }} onChange={this.handleChange} className={classes.Input} placeholder={textsConstants.EmailInput}/>
                     <TextField fullWidth margin="normal" inputProps={{ 'data-type': 'password' }} onChange={this.handleChange} className={classes.Input} type="password" placeholder={textsConstants.PasswordInput}/>
                     <Button onClick={this.handleClick} size="small" className={classes.Button} variant="contained" value="Login">
                        {textsConstants.LoginButton}
                     </Button>
                  </Paper>
               </Grid>
            </Grid>
         </Fragment>
      );
   }
}
export default withStyles(styles)(connect()(Login)) 