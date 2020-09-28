import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';


// material-ui
import Dashboard from '../Dashboard/Dashboard';

const styles = theme => ({

})

/**
 * This component is the entry point into the react app. From here the dashboard is loaded and global settings can be set.
 */
class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
  
}
export default withStyles(styles)(App);
