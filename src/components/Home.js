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

// Icon
import { 
   Info,
   Add,
   Delete,
   Edit
} from '@material-ui/icons';


// Material UI
import { withStyles } from '@material-ui/core/styles';
import {
   Grid,
   Paper,
   Tabs,
   Tab
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
      state = {
            activeItem : 0
      }
      handleClick = (activeItem) => {
            this.setState({
                  activeItem
            })
      }
      render() {
            const { token } = this.props.store
            const { classes } = this.props
            const { activeItem } =  this.state
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
                              <Tabs
                              fullWidth
                              indicatorColor="primary"
                              textColor="primary"
                              value={0}
                              >
                              <Tab label={textsConstants.LeaguesLink} icon={<Info/>} 
                                    className={classes.Tab} onClick={() => {this.handleClick(0)}}/>
                              <Tab label={textsConstants.CreateLink} icon={<Add />} 
                                    className={classes.Tab} onClick={() => {this.handleClick(1)}}/>
                              <Tab label={textsConstants.DeleteLink} icon={<Delete />} 
                                    className={classes.Tab} onClick={() => {this.handleClick(2)}}/>
                              <Tab label={textsConstants.ChangeLink} icon={<Edit/>} 
                                    className={classes.Tab} onClick={() => {this.handleClick(3)}}/>
                              </Tabs>
                              {activeItem == 0 && <Leagues/>}
                              {activeItem == 1 && <AddLeague/>}
                              {activeItem == 2 && <DeleteLeague/>}
                              {activeItem == 3 && <ChangeLeague/>}
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