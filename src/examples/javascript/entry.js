// See? ES2015 is here if you want it.
const helloWorldAlertEl = document.createElement('div')
helloWorldAlertEl.id = 'hello-world-alert'
helloWorldAlertEl.className = 'alert alert-success'
helloWorldAlertEl.innerHTML = '<p>Hello, World!</p>'
document.body.appendChild(helloWorldAlertEl)

// See? jQuery is here if you want it
const $ = require('jquery')

const $helloWorld = $(helloWorldAlertEl)

const getRandomInt = (min=0, max=255) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const changeTextColor = () => {
  $helloWorld.css(
    'color',
    `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
  )
}

window.setInterval(changeTextColor, 300)