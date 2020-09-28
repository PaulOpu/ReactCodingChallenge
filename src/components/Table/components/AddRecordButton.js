import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";

// Constants
import * as Constants from "../../../services/handler/constants";


const styles = theme => ({
    button: {
        margin: theme.spacing(1),
      },
    textfieldGrid: {
        flexGrow: 1,
    },
  });



class AddRecordButton extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            open: false,
            newRecord:{}
        }

        this.state.newRecord = Object.assign(
            this.state.newRecord, ...Constants.TABLE_COLUMNS.map(
            (textField) => ({[textField.id]: ""})));

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        

        
        
        
    };

    handleClickOpen(){
        this.setState({open:true});
    };
    
    handleClose(){
        this.setState({open:false});
    };

    handleAdd(){
        this.props.onAddClick(this.state.newRecord);
        this.setState({open:false});
    };

    handleChange(e){
        const newRecord = this.state.newRecord;
        newRecord[e.target.id] = e.target.value;
        this.setState({
            newRecord: newRecord
        });
      }

    render(){
        const classes = this.props;

        

        const gridFields = Constants.TABLE_COLUMNS.map(textField =>
            <Grid item xs={4} key={textField.id}>
                <TextField 
                    id={textField.id} 
                    label={textField.label} 
                    type={textField.type}
                    InputLabelProps={{
                        shrink: true,
                      }}
                    
                    onChange={this.handleChange}/>
            </Grid>
        );

        return (
            <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon/>}
                onClick={this.handleClickOpen}
            >
                Add
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out these information to add a new match to the database.
                    </DialogContentText>
                    <div className={classes.textfieldGrid}>
                    <Grid container spacing={3}>
                        {gridFields}
                    </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
          </Dialog>
          </React.Fragment>
        );
    }
}

AddRecordButton.propTypes = {
    onAddClick: PropTypes.func.isRequired,
};


export default withStyles(styles)(AddRecordButton);