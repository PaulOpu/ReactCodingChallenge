import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

import Title from '../../components/Title/Title';
import EnhancedTable from '../../components/Table/EnhancedTable'
import AddRecordButton from './components/AddRecordButton';

import APIServices from '../../services/client/api';
import * as Parser from "../../services/handler/parser";

// Constants
import * as Constants from "../../services/handler/constants";

const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
});


class Matches extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            rowsPerPage: 5,
            page: 0,
            dataDateFormat: "DD/MM/YY",
            addDialogDateFormat: "DD-MM-YYYY",
            outputDateFormat: "DD.MM.YYYY",

            matches: []
        };

        this.getSportData = this.getSportData.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.addRecord = this.addRecord.bind(this);
        
    }

    getSportData(){
      return APIServices.getAll().then(matches => {
        this.setState({matches:matches})
      });
      
    }

    componentDidMount(){
      this.getSportData();
    }

    onDeleteClick(row){
      const id = row.id;
      //delete object in database with corresponding id
      APIServices.delete(id);

      //normally I would call a refresh of the table when the item is deleted
      const matches = this.state.matches;
      const filtered = matches.filter(function(item) { 
        return item.id !== id;  
      });
      this.setState({matches:filtered})
    }

    addRecord(record){
      record.date = Parser.SetDateFormat(
        record.date,
        this.state.addDialogDateFormat,
        this.state.dataDateFormat);
      
      APIServices.create(record);

      //
      const matches = this.state.matches.concat(record);
      this.setState({matches:matches})
      
    }
  

    render(){
        return (
            <React.Fragment>
              <Title>Recent Scoccer Statistics</Title>
              <EnhancedTable 
                data= {this.state.matches}
                columns= {Constants.MATCH_TABLE_COLUMNS}
                onDeleteClick= {this.onDeleteClick}
                dataDateFormat= {this.state.dataDateFormat}
                outputDateFormat= {this.state.outputDateFormat} />
              <AddRecordButton onAddClick={this.addRecord} recordProperties={Constants.MATCH_TABLE_COLUMNS}/>
            </React.Fragment>
          );
    }
}




export default withStyles(styles)(Matches);