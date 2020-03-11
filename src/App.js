import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './components/PageWrapper/index';

const HomePage = React.lazy(() => import('./Pages/Home'));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <PageWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/' exact component={HomePage} />
            </Switch>
          </Suspense>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;