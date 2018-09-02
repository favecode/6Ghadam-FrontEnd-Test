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

// Styles
const styles = theme => ({
      Dialog: {
            fontFamily: 'iranSans'
      },
      DialogContent: {
            fontFamily: 'iranSans'

      },
      DialogContentText: {
            fontFamily: 'iranSans',
            textAlign: 'right',
            marginBottom : '1rem'
      },
      DialogTitle: {
            fontFamily: 'iranSans',
            textAlign: 'right'
      },
      Button : {
            fontFamily: 'iranSans'
      },
      Input: {
            fontFamily: 'iranSans',
            textAlign: 'right'
      }
})

// Components
class ChangeLeague extends Component {
      state = {
            open: this.props.open,
            name: this.props.name,

      }

      componentWillReceiveProps(next) {
            this.setState({
                  open: next.open,
                  name: next.name
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
                  name: value
            })
      }

      handleDone = () => {
            const { token , id } = this.props
            const { name } = this.state
            if (name != '') {
                  apiFunctions.updateLeague(token, name, '',id).then(response => {
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
            >
                  <DialogTitle id="alert-dialog-title">
                        <Typography variant="title" className={classes.DialogTitle}>
                              {textsConstants.Change}
                        </Typography>
                  </DialogTitle>
                  <DialogContent>
                        <DialogContentText id="alert-dialog-description" className={classes.DialogContentText}>
                              {textsConstants.ChangeMessage}
                        </DialogContentText>
                              <TextField dir="rtl" onChange={this.handleChange} 
                              defaultValue={this.state.name} className={classes.Input} />
                  </DialogContent>
                  <DialogActions className={classes.DialogActions}>
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
export default withStyles(styles)(ChangeLeague)