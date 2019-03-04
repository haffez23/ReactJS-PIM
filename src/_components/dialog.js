import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog} from '@material-ui/core';
import {Paper, Button,} from '@material-ui/core';

import Draggable from 'react-draggable';
const styles = {

};
function PaperComponent(props) {
    return (
      <Draggable>
        <Paper {...props} />
      </Draggable>
    );
  }
class AlertDialog extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    

    render() {
        const { classes } = this.props;
        return (


            
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">{this.props.DialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.DialogContentText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {this.props.cancel}
            </Button>
            <Button onClick={this.handleClose} color="primary">
                {this.props.submit}
            </Button>
          </DialogActions>
        </Dialog>



        );
    }


}

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        open: true
    };
}

export default connect(mapStateToProps)(withStyles(styles)(AlertDialog));