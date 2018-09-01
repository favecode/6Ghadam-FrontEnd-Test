// React
import React, { Component, Fragment } from 'react'

// Redux
import { connect } from 'react-redux'

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Components
import Login from './Login'
import Leagues from './Leagues'
import AddLeague from './AddLeague'
import DeleteLeague from './DeleteLeague'
import ChangeLeague from './ChangeLeague'

// Material UI
import {
   Grid,
   Paper,
} from '@material-ui/core'

// Component
class Home extends Component {
   render() {
      const { token } = this.props.store
      return (
         <Router>
            {token == null 
            ?
            <Fragment><Login/></Fragment> 
            :
            <Fragment>
               <Grid container dir="rtl" justify="center" alignContent="center" >
                  <Grid item sm={6}>
                     <Paper item>
                           <Link to="/leagues">Leagues</Link>
                           <Link to="/addLeague">Create League</Link>
                           <Link to="/deleteLeague">Delete League</Link>
                           <Link to="/changeLeague">Change League</Link>
                     </Paper>
                  </Grid>
               </Grid>
               <Route path='/leagues' exact={true} component={Leagues}/>
               <Route path='/addLeague' component={AddLeague}/>
               <Route path='/deleteLeague' component={DeleteLeague}/>
               <Route path='/changeLeague' component={ChangeLeague}/>
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

export default connect(mapStateToProps,null)(Home)