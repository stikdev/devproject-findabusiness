// 3rd Party
const React = require('react')
const ReactDOM = require('react-dom')

// Local
const HelloWorldComponent = require('./HelloWorldComponent.jsx')

// See? React and JSX are here if you need it

const reactEntryContainerEl = document.createElement('div')

document.body.appendChild(reactEntryContainerEl)

ReactDOM.render(<HelloWorldComponent />, reactEntryContainerEl)