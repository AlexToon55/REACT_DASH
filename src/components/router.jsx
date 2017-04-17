import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

// Template wraps our components with the nav bar and footer
import Template from './template.jsx';

// Import the page components
import Dash from './pages/dash.jsx';
import Home from './pages/home.jsx';

/*
    Usage: Nest your react routes under the template route

    <Route component={Template} >
      <Route path="/" component={Home} />
    </Route>

    In this example, this would render the Home page inside the Template accessible by visiting
    the root route.
*/

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Template}>
      <Route path="/" component={Dash} />
      <Route path="/home" component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
