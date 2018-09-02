// React
import React, { Component } from 'react'

// Helpers
import { apiFunctions } from './../helpers'

// Constants
import { textsConstants } from './../constants'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Typography
} from '@material-ui/core'

const styles = theme => ({
   Dialog: {
      fontFamily: 'iranSans'
   },
   DialogContent: {
      fontFamily: 'iranSans',
      textAlign: 'right'

   },
   DialogContentText: {
      fontFamily: 'iranSans',
      textAlign: 'right'
   },
   DialogTitle: {
      fontFamily: 'iranSans',
      textAlign: 'right'

   },
   Button: {
      fontFamily: 'iranSans'
   },
   Input : {
      fontFamily: 'iranSans',
      textAlign: 'right'
   }
})

// Components
class AddLeagues extends Component {
   state = {
      open: this.props.open,
   }

   componentWillReceiveProps(next) {
      this.setState({
      open: next.open
      })
   }

   handleClickOpen = () => {
      this.setState({ open: true })
   }

   handleClose = () => {
      this.setState({ open: false })
   }

   handleChange = (element) => {
      const { value } = element.target
      this.setState({
         name : value
      })
   }

   handleDone = () => {
      const { token } = this.props
      const { name } = this.state
      if(name != ''){
         apiFunctions.addLeague(token,name,'').then(response => {
            this.handleClose()
            this.props.read()
         })
      }
   }
   render() {
      const { classes } = this.props
      return (
         <Dialog
         open={this.state.open}
         onClose={this.handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
         className={classes.Dialog}
         >
         <DialogTitle id="alert-dialog-title">
            <Typography variant="title" className={classes.DialogTitle}>
               {textsConstants.Create}
            </Typography>
         </DialogTitle>
         <DialogContent className={classes.DialogContent}>
            <TextField dir="rtl" onChange={this.handleChange} 
            placeholder={textsConstants.CreateMessage} 
            className={classes.Input}/>
         </DialogContent>
         <DialogActions>
            <Button onClick={this.handleClose} color="primary" className={classes.Button}>
               {textsConstants.Cancel}
            </Button>
            <Button onClick={this.handleDone} color="primary" className={classes.Button}>
               {textsConstants.Confirm}
            </Button>
         </DialogActions>
         </Dialog>
      )
   }
}
export default withStyles(styles)(AddLeagues)