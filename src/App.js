import React from 'react';
import ResponsiveDrawer from './components/admin/admin'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import fire from './config/fire'
/*import Error from './components/error'*/
import Login from './components/login'

class App extends React.Component{
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }
    render() {
        return (
            <Router>
                <Switch>
                    {this.state.user ? (<ResponsiveDrawer/>) : (<Login/>)}
                </Switch>
            </Router>
        );
    }
}

export default App;
