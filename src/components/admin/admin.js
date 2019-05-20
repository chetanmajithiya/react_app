import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard_Comp from './child-components/dashboard';
import Customers_Comp from './child-components/customers';
import Calendar_Comp from './child-components/calendar';
import Deals_Comp from './child-components/Deals';
import Jobs_Comp from './child-components/jobs';
import Quotes_Comp from './child-components/quotes';
import Staff_Comp from './child-components/staff';
import fire from '../../config/fire'



const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});



class ListItemLink extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;


    render() {
        const { icon, primary } = this.props;
        return (
            <li>
                <ListItem button component={this.renderLink}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={primary} />
                </ListItem>
            </li>
        );
    }
}

ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    Logout = () => {
        fire.auth().signOut();
    }
    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List component="nav">
                    <ListItemLink to="/admin" primary="Dashboard" icon={<Icon>poll</Icon>} />
                    <ListItemLink to="/admin/deals" primary="Deals" icon={<Icon>business_center</Icon>} />
                    <ListItemLink to="/admin/customers" primary="Customer" icon={<Icon>group</Icon>} />
                    <ListItemLink to="/admin/calender" primary="Calendar" icon={<Icon>calendar_today</Icon>} />
                    <ListItemLink to="/admin/quotes" primary="Quotes" icon={<Icon>queue</Icon>} />
                    <ListItemLink to="/admin/jobs" primary="Jobs" icon={<Icon>card_travel</Icon>} />
                    <ListItemLink to="/admin/staff" primary="Staff" icon={<Icon>extension</Icon>} />

                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Levaral App Demo
                        </Typography>

                        <div style={{flexGrow: '1'}}/>
                        <Button onClick={this.Logout} size="large" style={{color: 'white'}} >
                            <Icon style={{fontSize: '20px', marginRight: '5px'}}>input</Icon>
                            Logout
                        </Button>

                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            color="primary"
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Route
                        render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={250}
                                    classNames="fade">
                                    <Switch location={location}>
                                        <Route exact path='/' component={Dashboard_Comp} />
                                        <Route exact path='/admin/' component={Dashboard_Comp} />
                                        <Route path='/admin/deals' component={Deals_Comp} />
                                        <Route path='/admin/customers' component={Customers_Comp} />
                                        <Route path='/admin/calender' component={Calendar_Comp} />
                                        <Route path='/admin/quotes' component={Quotes_Comp} />
                                        <Route path='/admin/jobs' component={Jobs_Comp} />
                                        <Route path='/admin/staff' component={Staff_Comp} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />

                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);