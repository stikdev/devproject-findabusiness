// 3rd Party
const angular = require('angular')

// Create a template
const helloWorldTemplate = `
<div ng-controller="helloWorldController">
  <div class="alert alert-success">
    <p>{{greeting.text}}, World!</p>
  </div>
</div>
`

// Create a module
const exampleModule = angular.module('exampleModule', [])

// Create and register a controller
const HelloWorldController = ($scope) => {
  $scope.greeting = {
    text: 'Hello',
  }
}
exampleModule.controller('helloWorldController', HelloWorldController)

// Adding the controller to the DOM
// In your use, it's entirely suitable to have this directly in the index.html.
// It's only contained here for example purposes so a clean index.html is preserved.
const appContainerEl = document.createElement('div')
appContainerEl.innerHTML = helloWorldTemplate
document.body.appendChild(appContainerEl)

// Bootstrapping the Angular app
angular.bootstrap(appContainerEl, ['exampleModule'])
