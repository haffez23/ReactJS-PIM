import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {Paper ,Grid,Button,TextField} from '@material-ui/core';
import {Delete,Edit,CalendarToday,Info,Message,Group} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog} from '@material-ui/core';
import {Drawer,List,Divider} from '@material-ui/core';
import Draggable from 'react-draggable';
const styles = {
    list: {
        width: 'auto',
      },
    card: {
        maxWidth: 345,
        margin : 8,
    },
    media: {
        height: 140,
        
    },
};
function PaperComponent(props) {
    return (
      <Draggable>
        <Paper {...props} />
      </Draggable>
    );
  }

  function RightSideComponent(props,action) {

      if (action==='edit'){
        return (
    
            <Grid container spacing={24}>
            <Grid item xs={12} padding={50}>
              <Paper className={props.classes.paper} center>Edit device</Paper>
            </Grid>
            <Grid item xs={6}>

                <TextField
                    id="standard-name"
                    label="Name"
                    className={props.textField}
                    value={props.title}
                    margin="normal"

                />       
             </Grid>
            <Grid item xs={6}>
            <Paper className={props.paper}>Name</Paper>

            </Grid>
            <Grid item xs={3}>
              <Paper className={props.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={props.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={props.classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={props.classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        );
      }else{
        return (
    
            <Grid container spacing={24}>
            <Grid item xs={12} padding={50}>
              <Paper className={props.classes.paper}>xs=12</Paper>
            </Grid>
           
          </Grid>
        );
      }
   
  }
  
class Device extends React.Component {
    toggleDrawer = (side, open,action) => () => {
        this.setState({
          [side]: open,
          action : action,
          
        
        });
      };
    constructor(props) {
        super(props);
        this.state = {
            anchor: 'left',
            right: false,
            device :{
                title :'',
                code :''
            }
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


            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h3" xs={6} >
                                {this.props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} >
                                <Typography  xs={6} >
                                    {this.props.message}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
              
                </CardContent>
                <CardActions>
                <IconButton className={classes.button} aria-label="Delete" onClick={this.handleClickOpen}>
                    <Delete />
           
                </IconButton>  
                <IconButton className={classes.button} aria-label="Edit" onClick={this.toggleDrawer('right', true,'edit')} >
                    <Edit />
                </IconButton>  
                <IconButton className={classes.button} aria-label="Info" onClick={this.toggleDrawer('right', true,'info')} >
                    <Info />
                </IconButton> 
                <IconButton className={classes.button} aria-label="Calendar" >
                    <CalendarToday />
                </IconButton>  
                <IconButton className={classes.button} aria-label="Message" >
                    <Message />
                </IconButton>  
                <IconButton className={classes.button} aria-label="Group" >
                    <Group />
                </IconButton>  
        

        </CardActions>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You won't be able to revert this!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Yes, delete it
            </Button>
          </DialogActions>
        </Dialog>



         <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
          >
            {RightSideComponent(this.props,this.state.action)}
          </div>
        </Drawer>

            </Card>



        );
    }


}

Device.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const { device } = state.device;
    return {
        device
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Device));