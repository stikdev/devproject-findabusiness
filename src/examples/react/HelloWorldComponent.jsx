const React = require('React')

class HelloWorldComponent extends React.Component {
  render() {
    return (
      <div className='alert alert-success'>
        <p>Hello, World!</p>
      </div>
    )
  }
}

module.exports = HelloWorldComponent