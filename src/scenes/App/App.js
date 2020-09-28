import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';


// material-ui
import Dashboard from '../Dashboard/Dashboard';

const styles = theme => ({

})


class App extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
  
}
export default withStyles(styles)(App);
