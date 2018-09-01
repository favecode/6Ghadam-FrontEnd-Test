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

// Actions
import { loginUser } from './../actions'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import {
   TextField,
   Button,
   Paper,
   Grid,
   Typography,
   CircularProgress
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
   },
   Progress : {
      color: '#4CAF50',
      margin : '30px'
   },
   Loading : {
      top : '0',
      left : '0',
      position : 'absolute',
      backgroundColor : 'rgba(255,255,255,1)',
      width : '100vw',
      height : '100vh',
      zIndex : '2',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
   }
})

// Components
class Login extends Component {
   state = {
      email: 'admin@6ghadam.com',
      password: '6Gh4d4m4dm1nP455',
      loading : false
   }
   handleChange = (element) => {
      let { value , dataset } = element.target
      this.setState({
         [dataset.type] : value
      })
   }
   handleClick = () => {
      this.setState({
          loading : true
      })
      let { email, password } = this.state
      if(email != '' && password != ''){
         apiFunctions.loginUser(email, password).then(response => {
            this.setState({
               loading: false
            })
            let token = response.data.id
            this.props.login(token)
         })
      }
   }
   render() {
      const { classes } = this.props
      return (
         <Fragment>
            <Grid container dir="rtl" justify="center">
               <Grid item sm={4} className={classes.GridItem}>
                  {this.state.loading 
                  ?
                  <div className={classes.Loading}>
                     <CircularProgress className={classes.Progress} />
                     <Typography variant="title" className={classes.Header} align="center">
                        {textsConstants.LoadingHeader}
                     </Typography>
                  </div>
                  :
                  ''
                  }
                  <img src={logo} width="150" />
                  <Paper className={classes.Paper}>
                     <Typography variant="title" className={classes.Header} align="center">
                        {textsConstants.LoginHeader}
                     </Typography>
                     <TextField fullWidth margin="normal" inputProps={{ 'data-type': 'email' }} onChange={this.handleChange}
                     className={classes.Input} defaultValue={this.state.email} placeholder={textsConstants.EmailInput}/>
                     <TextField fullWidth margin="normal" inputProps={{ 'data-type': 'password' }} onChange={this.handleChange}
                     className={classes.Input} type="password" defaultValue={this.state.password} placeholder={textsConstants.PasswordInput}/>
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
const mapDispatchToProps = (dispatch) => {
   return {
      login : (token) => {
         dispatch(loginUser(token))
      }
   }
}
export default withStyles(styles)(connect(null, mapDispatchToProps)(Login)) 