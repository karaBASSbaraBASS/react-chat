import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Switch, Route } from "react-router-dom";


const Root = () => (
    <Router>
        <Switch>
            <Route exact patch="/" component={App}/>
            <Route exact patch="/login" component={Login}/>
            <Route exact patch="/register" component={Register}/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
