/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'

ReactDOM.render(
  <div>
    <h1>App</h1>
    <Hello/>
  </div>,
  document.querySelector('.main')
)

// HMR
import {setStatefulModules} from 'fuse-box/modules/fuse-hmr';
setStatefulModules(name => {
  console.log('changed', name)
  // Add the things you think are stateful:
  return /router/.test(name) || /state/.test(name);
});
