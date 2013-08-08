# jQuery TopBar [![Build Status](https://secure.travis-ci.org/audreyr/topbar.png?branch=master)](https://travis-ci.org/audreyr/topbar)

A top bar for notifications. Dismiss it by clicking the x.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.topbar.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").({
		propertyName: "a custom value"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.topbar.js
│   └── jquery.topbar.min.js
├── src/
│   ├── jquery.topbar.coffee
│   └── jquery.topbar.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── topbar.jquery.json
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/audreyr/topbar/tree/master/demo)

Contains a simple HTML file to demonstrate jQuery TopBar.

#### [dist/](https://github.com/audreyr/topbar/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/audreyr/topbar/tree/master/src)

Contains the files responsible for jQuery TopBar, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/audreyr/topbar/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/audreyr/topbar/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [.jshintrc](https://github.com/audreyr/topbar/tree/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

> Check [jshint.com](http://jshint.com/about/) if you haven't heard about this project yet.

#### [.travis.yml](https://github.com/audreyr/topbar/tree/master/.travis.yml)

Definitions for continous integration using Travis.

> Check [travis-ci.org](http://about.travis-ci.org/) if you haven't heard about this project yet.

#### [boilerplate.jquery.json](https://github.com/audreyr/topbar/tree/master/boilerplate.jquery.json)

Package manifest file used to publish jQuery TopBar in jQuery Plugin Registry.

> Check this [Package Manifest Guide](http://plugins.jquery.com/docs/package-manifest/) for more details.

#### [Gruntfile.js](https://github.com/audreyr/topbar/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/audreyr/topbar/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Guides

#### Usage

Here's how to use jQuery TopBar:

TODO

#### Installation

Here's how to install jQuery TopBar:

TODO

## Team

jQuery TopBar was created by Audrey Roy, with help from these [contributors](https://github.com/audreyr/topbar/graphs/contributors).

Credit goes to [Zeno Rocha](http://zenorocha.com) and [Addy Osmani](http://addyosmani.com) for creating [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate) and to [Audrey Roy](http://www.audreymroy.com) for creating [cookiecutter-jquery](https://github.com/audreyr/cookiecutter-jquery) from jquery-boilerplate.

## Contributing

Check [CONTRIBUTING.md](https://github.com/audreyr/topbar/blob/master/CONTRIBUTING.md)

## History

Check [HISTORY.md](https://github.com/audreyr/topbar/blob/master/HISTORY.md)

## License

[MIT License](http://audreyr.mit-license.org/)