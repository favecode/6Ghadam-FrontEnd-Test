// React
import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
   render() {
      const { token } = this.props.store
      const { classes } = this.props
      return (
         <Router>
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
                              className={classes.Tab} data-link="leagues" onClick={this.handleClick}/>
                           <Tab label={textsConstants.CreateLink} icon={<Add />} 
                              className={classes.Tab} data-link="addLeague" onClick={this.handleClick}/>
                           <Tab label={textsConstants.DeleteLink} icon={<Delete />} 
                              className={classes.Tab} data-link="deleteLeague" onClick={this.handleClick}/>
                           <Tab label={textsConstants.ChangeLink} icon={<Edit/>} 
                              className={classes.Tab} data-link="changeLeague" onClick={this.handleClick}/>
                        </Tabs>
                        <Route path='/leagues' exact={true} component={Leagues} />
                        <Route path='/addLeague' component={AddLeague} />
                        <Route path='/deleteLeague' component={DeleteLeague} />
                        <Route path='/changeLeague' component={ChangeLeague} />
                     </Paper>
                  </Grid>
               </Grid>
            </Fragment>}
         </Router>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      store: state
   }
}

export default withStyles(styles)(connect(mapStateToProps, null)(Home)) 