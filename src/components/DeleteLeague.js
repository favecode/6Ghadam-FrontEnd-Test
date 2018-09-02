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
      Button : {
            fontFamily : 'iranSans'
      }
})

// Components
class DeleteLeagues extends Component {
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

      handleDone = () => {
            const { token, id } = this.props
            apiFunctions.deleteLeague(token,id).then(response => {
                  this.handleClose()
                  this.props.read()
            })
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
                                    {textsConstants.Delete}
                              </Typography>
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description" className={classes.DialogContentText}>
                              {textsConstants.DeleteMessage}
                        </DialogContentText>
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
export default withStyles(styles)(DeleteLeagues)