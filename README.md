## The Development Exercise

### Overview
Hey! We're the Waymark development team.

We've tried our best to get monotony out of the way with this development environment. That way, you can spend your time concentrating on the exercise and not managing dependencies. If you want to use ES2015+, CoffeeScript, React, Angular 1.x, SCSS, etc., we've pre-installed and configured a build system that supports that out of the box. Of course, if we've failed to include your favorite tool or framework, feel free to add it to the project yourself.

We ask that you please spend no more than **8 hours** completing this project.

Our team will review your submission for a number of criteria -- functionality, completeness, code structure, craft, and presentation, to name a few -- so please put your best foot forward. To that end, we ask that you complete this project using whatever tools/frameworks allow you to show off your skills. When in doubt, use what you know -- there are no bonus points for picking one framework over another (or none at all).

Have fun!

### Description
Build an application that allows a user to search for their business. The user should be required to provide a zip code and business name to submit a search.

On search, identify the business, and then display to the user a set of information related to that business:
- The business name, phone number, website URL, address, and industry/category
- Up to 5 photos that best represent the business
- For each photo, display one or more tags that describe its contents (e.g. 'dog', 'hamburger', 'wombat')

### 3rd Party Requirements
#### Google Places API

Use the
[Google Places API](https://developers.google.com/maps/documentation/javascript/places#overview)
to search for a business, retrieve business info, and find business photos.

You'll need to create a Google Map object to use the Places API:
``` javascript
    var mapDiv = document.createElement('div');
    var map = new google.maps.Map(mapDiv);
    var service = new google.maps.places.PlacesService(map);
```

Text search: `service.textSearch`
``` javascript
    service.textSearch({
      query: '48316 restaurants'
    }, function(results) {
      console.log(results);
    });
```

Details: `service.getDetails`
``` javascript
    service.getDetails({
      placeId: 'ChIJCb4mp4noJIgRdNyz9l79Eq8'
    }, function(results) {
      console.log(results);
    });
```

API Credentials:
  - API Key: `AIzaSyBfmjsT-RvKxn7in_6OEkfFdNlFWqoV73s` - This is already included in the script tag for the Google Places API.

#### Clarifai Image Processing API

Use the [Clairifai API](https://developer.clarifai.com/quick-start/) to tag images based on
their content. As discussed below, the JavaScript library has been pre-installed if you want to use it.

API Credentials
  - App Id: `NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe`
  - App Secret: `c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9`

An example use:
```javascript
var Clarifai = require('clarifai');

var app = new Clarifai.App(
'NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe',
'c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9'
);

// Predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
)
```

### Deliverable
Upon completion, please send us a link to your copy of this repository (preferably on GitHub). Include a list of known bugs or deficiencies in your project, if necessary. Please do not fork the repo; instead, follow these steps:

- Clone this repository
  - E.g. `git clone https://github.com/stikdev/devproject-findabusiness.git`
- Create an empty GitHub repository
  - E.g. `https://github.com/your-user-name/devproject-findabusiness.git`
- Add a remote to your empty repository
  - E.g. `git remote add my-origin https://github.com/your-user-name/devproject-findabusiness.git`
- Then you should be able to commit your changes and push them up to your repository
  - E.g. `git push my-origin master`

## The Development Environment

### Requirements

- node LTS (v6)

### Installation

1. Clone this repository
2. Run `npm install` to install dependencies

### Scripts

- `npm run clean` will clean out the compiled code. Currently this is everything in `dist/js/`.
- `npm run build` will run a webpack build of the JS/CSS.
- `npm run watch` will run a webpack build of JS/CSS and watch for changes.
- `npm run serve` will serve up the `dist/` directory at `localhost:8080`.
- `npm run test` will run the unit tests.

### How It Works

By default, the core of the application runs through `src/main.js`. Within `main.js`, we've provided a few examples of the configurations available to you, ranging from bare-bones JavaScript, to CoffeeScript+React, to AngularJS. Uncomment any of the examples in `main.js` to see them in action.

To start:

1. In one terminal session `npm run watch` to compile the JS/CSS. This will compile `src/main.js` into `dist/js/main.bundle.js`, and then re-compile when any changes are made.
2. In another terminal session `npm run serve` to serve up the `dist/` directory at `localhost:8080`.

By default, `localhost:8080` is configured to serve up `dist/index.html`, which runs the Javscript example within `dist/js/main.bundle.js`.

If you want to forego all of the JavaScript bundling, feel free to simply store your JS/CSS within the `dist` directory.

### Out-of-the-Box Stuff

For your convenience, we've configured a bunch of stuff so you can feel as comfortable as possible with this exercise. Feel free to use (or not) any of them.

The following libraries have been pre-installed/configured:

- Bundling
  - [Webpack](https://webpack.js.org)
- JavaScript Syntaxes
  - [CoffeeScript](http://coffeescript.org)
  - ES2015
  - JSX
  - CJSX
- JavaScript 'Frameworks'
  - [jQuery](https://jquery.com)
  - [React/ReactDOM](https://facebook.github.io/react/)
  - [Angular (1.6.x)](https://angularjs.org)
- Stylesheets
  - [SASS support](http://sass-lang.com)
  - [SASS Bootstrap](http://getbootstrap.com)
- Libraries/Utilities
  - [axios](https://github.com/mzabriskie/axios)
    - HTTP client
- Testing
  - [mocha](https://mochajs.org)
  - [chai](http://chaijs.com)
- 3rd Party Clients
  - [Google Places API](https://developers.google.com/maps/documentation/javascript/places#overview)
    - For use with the Google Places web API
    - `require('google');`
  - [Clarifai](https://developer.clarifai.com/quick-start/)
    - For use with the Clairifai web API
    - `require('clarifai');`

## Questions?
If you have any questions or issues, please feel free to reach out to anyone on the team, or simply ping us at [tech@waymark.com](mailto:tech@waymark.com). Go Wombats!
