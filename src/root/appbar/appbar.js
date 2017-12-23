import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PhoneIcon from 'material-ui-icons/Phone';
import Message from 'material-ui-icons/Message';
import Whatshot from 'material-ui-icons/Whatshot';
import Home from 'material-ui-icons/Home';
import Person from 'material-ui-icons/Person';
import Notification from 'material-ui-icons/Notifications'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 1 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
    margin:1,
    padding:'1px'
  },
});

class BasicTabs extends React.Component {
  state = {
    value: 0,
    padding:1,
    margin:0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const tabStyle={
        color:'rgb(30,144,255)',
        fontStyle:'bold'
    }

    return (
      <header >
        <AppBar position="static" className={classes.root}>
          <Tabs value={value} onChange={this.handleChange}>

          <Tab  icon={<Home />}style={tabStyle} />
          <Tab  icon={<Whatshot />}style={tabStyle} />
            <Tab  icon={<Message />}style={tabStyle} />
              <Tab icon={<Notification/>} href="#basic-tabs" style={tabStyle} />
          </Tabs>

          

        </AppBar>
    
      </header>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTabs);