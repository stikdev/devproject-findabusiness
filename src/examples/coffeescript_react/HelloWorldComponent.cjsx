# 3rd Party
React = require('react')

class HelloWorldComponent extends React.Component
  render: ->
    return (
      <div className='alert alert-success'>
        <p>Hello, World!</p>
      </div>
    )

module.exports = HelloWorldComponent