# 3rd Party
React = require('react')
ReactDOM = require('react-dom')

# Local
HelloWorldComponent = require('./HelloWorldComponent.cjsx')

# See? React and CJSX are here if you need it

reactEntryContainerEl = document.createElement('div')

document.body.appendChild(reactEntryContainerEl)

ReactDOM.render(<HelloWorldComponent />, reactEntryContainerEl)