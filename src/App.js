import React, { Component } from 'react';

import PageWrapper from './components/PageWrapper';
import HomePage from './components/Pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    );
  }
}

export default App;