import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';


const Root = () => (
    <Router>
        <Switch>
            <Route exact patch="/" component={Register}/>
            <Route patch="/login" component={Login}/>
            <Route patch="/register" component={Register}/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
