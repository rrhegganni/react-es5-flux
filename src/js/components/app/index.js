import React from 'react';
import {Welcome} from '../welcome';
import {ReactLifecycle} from '../react-lifecycle';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Welcome />
        <ReactLifecycle name="Rakesh"/>
      </div>
    );
  }
}

export {App};
