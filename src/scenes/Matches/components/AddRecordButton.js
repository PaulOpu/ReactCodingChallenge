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

const styles = theme => ({
    button: {
        margin: 10,
      },
    textfieldGrid: {
        flexGrow: 1,
    },
  });


/**
 * This Button incorporates the dialog with the user to add a match to the table.
 */
class AddRecordButton extends Component{
    
    constructor(props){
        super();
        this.state = {
            open: false,
            /** dynamically generates a dictionary for the new record */
            newRecord:Object.assign(
                {}, ...props.recordProperties.map(
                (textField) => ({[textField.id]: ""})))
        }

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
    /**
     * This function executes the onAddClick function of the parent component. 
     * It is triggerd by the "add" button of the dialog.
     *
     * @public
     */
    handleAdd(){
        this.props.onAddClick(this.state.newRecord);
        this.setState({open:false});
    };

    /**
     * Insert text at cursor position.
     *
     * @param {e} event
     * @public
     */
    handleChange(e){
        const newRecord = this.state.newRecord;
        newRecord[e.target.id] = e.target.value;
        this.setState({
            newRecord: newRecord
        });
      }

    render(){
        const { classes, recordProperties } = this.props;
        const { open } = this.state;

        const gridFields = recordProperties.map(textField =>
            <Grid item xs={6} sm={4} md={4} lg={4} key={textField.id}>
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
            {/*TODO: add margin to button*/}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddIcon/>}
                onClick={this.handleClickOpen}
            >
                Add
            </Button>
            <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Record</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out these information to add a new match to the database.
                    </DialogContentText>
                    <div className={classes.textfieldGrid}>
                        <Grid container spacing={1}>
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
    recordProperties: PropTypes.array.isRequired,
};


export default withStyles(styles)(AddRecordButton);