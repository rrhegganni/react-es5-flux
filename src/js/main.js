import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';

if(document){
  ReactDOM.render(<App />, document.getElementById('app'));
}
