# jQuery TopBar [![Build Status](https://secure.travis-ci.org/audreyr/topbar.png?branch=gh-pages)](https://travis-ci.org/audreyr/topbar) [![devDependencies](https://david-dm.org/audreyr/topbar.png)](https://david-dm.org/audreyr/topbar#info=devDependencies)

A top bar for notifications. Dismiss it by clicking the x.

* Free software: [MIT License](http://audreyr.mit-license.org/)
* History: [HISTORY.md](https://github.com/audreyr/topbar/blob/master/HISTORY.md)
* How to contribute: [CONTRIBUTING.md](https://github.com/audreyr/topbar/blob/master/CONTRIBUTING.md)

## Demo

Here are several TopBars in action: http://audreyr.github.io/topbar/demo/

* They correspond to Bootstrap's **default**, **primary**, **success**, **info**,
  **warning**, and **danger** styles.
* The default TopBars are purposely plain. It's your job to change the CSS
  colors and font to match your site, of course.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
  <link href="dist/jquery.topbar.min.css" rel="stylesheet">
	<script src="dist/jquery.topbar.min.js"></script>
	```

3. Put your plugin HTML on your web page:

  ```html
  <div class="topbar" id="mynotification">
      <div class="container">
        This is a notification. You can click it away if you want.
        <button type="button" class="close" data-dismiss="message">&times;</button>
      </div>
  </div>
  ```

4. Call the plugin:

	```javascript
	$("#mynotification").topBar({
		slide: false
	});
	```

## Team

* jQuery TopBar was created by Audrey Roy, with help from these [contributors](https://github.com/audreyr/topbar/graphs/contributors).

### Credits

* [Zeno Rocha](http://zenorocha.com) and [Addy Osmani](http://addyosmani.com) for creating [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate).
* [Audrey Roy](http://www.audreymroy.com) for creating [cookiecutter-jquery](https://github.com/audreyr/cookiecutter-jquery).
