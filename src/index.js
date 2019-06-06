import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';

const Root = () => (
    <HashRouter>
        <div>
            <Route patch="/" component={App} />
            <Route patch="login" component={Login} />
            <Route patch="register" component={Register} />
        </div>
    </HashRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
