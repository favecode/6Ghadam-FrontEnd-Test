// React
import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Constants
import { textsConstants } from './../constants'

// Components
import Login from './Login'
import Leagues from './Leagues'
import AddLeague from './AddLeague'
import DeleteLeague from './DeleteLeague'
import ChangeLeague from './ChangeLeague'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import {
   Grid,
   Paper,
} from '@material-ui/core'

// Styles
const styles = theme => ({
   Tab : {
      paddingTop: '1rem',
      fontFamily : 'iranSans',
   },
   Paper : {
      
   }
})

// Component
class Home extends Component {
      render() {
            const { token } = this.props.store
            const { classes } = this.props
            return (
            <div>
                  {token == null 
                  ?
                  <Fragment><Login/></Fragment> 
                  :
                  <Fragment>
                  <Grid container dir="rtl" justify="center" alignContent="center" >
                        <Grid item sm={6}>
                        <Paper item className={classes.Paper}>
                              <Leagues token={token}/>
                        </Paper>
                        </Grid>
                  </Grid>
                  </Fragment>}
            </div>
            );
      }
}

const mapStateToProps = (state) => {
   return {
      store: state
   }
}

export default withStyles(styles)(connect(mapStateToProps, null)(Home)) 