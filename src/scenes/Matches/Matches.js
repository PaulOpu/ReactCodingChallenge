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

/**
 * The Matches component shows a table with all matches from the database.
 * Moreover, it incorporates the logic that is required to interact with the table content.
 * It is possible to add matches and to delete them. Thereby, the app sends a mockup API call 
 * to the backend.
 */
class Matches extends Component {
    constructor(props){
        super();
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

    /**
     * Retrieve the matches data for the table and sets the state.
     *
     * @public
     */
    getSportData(){
      return APIServices.getAll().then(matches => {
        this.setState({matches:matches})
      });
      
    }

    componentDidMount(){
      this.getSportData();
    }

    /**
     * Triggered if the user presses the delete action of a row. 
     * Deletes the entry from the database.
     * In this app this procedure is mocked and therefore, the entry is just filtered out.
     * Normally, the app waits for the deletion with a loading toast indicator and refreshes the data afterwards.
     *
     * @param {row} dict
     * @public
     */
    onDeleteClick(row){
      const id = row.id;

      // API Call (MockUp)
      APIServices.delete(id);

      // normally, just refresh after succesfull deletion
      const matches = this.state.matches;
      const filtered = matches.filter(function(item) { 
        return item.id !== id;  
      });
      this.setState({matches:filtered})
    }

    /**
     * Triggered if the user presses the add button of the table. 
     * Transform the date, so that it matches the format of the database output.
     * Call the API service and add the entry. Normally, the process waits with a loading toast 
     * indicator until the database returns a state. Then the table is refreshed.
     * 
     * @param {record} dict
     * @public
     */
    addRecord(record){
      record.date = Parser.SetDateFormat(
        record.date,
        this.state.addDialogDateFormat,
        this.state.dataDateFormat);
      
      // API Call (MockUp)
      APIServices.create(record);

      // normally, just refresh after succesfull insetion
      const matches = this.state.matches.concat(record);
      this.setState({matches:matches})
      
    }
  

    render(){

        const { matches } = this.state;
        
        return (
            <React.Fragment>
              <Title>Recent Scoccer Statistics</Title>
              <EnhancedTable 
                data= {matches}
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