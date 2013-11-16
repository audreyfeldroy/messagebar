# jQuery TopBar [![Build Status](https://secure.travis-ci.org/audreyr/topbar.png?branch=gh-pages)](https://travis-ci.org/audreyr/topbar) [![devDependencies](https://david-dm.org/audreyr/topbar.png)](https://david-dm.org/audreyr/topbar#info=devDependencies)

A top bar for notifications. Dismiss it by clicking the x.

* Free software: MIT License (http://audreyr.mit-license.org/)

## Screenshot and Demo

Here is a screenshot of TopBar being used on https://www.djangopackages.com:

![Screenshot of TopBar](topbar-screenshot.png)

To see a live demo of several TopBars in action, see http://audreyr.github.io/topbar/demo/.

* They correspond to Bootstrap's **default**, **primary**, **success**, **info**,
  **warning**, and **danger** styles.
* The default TopBars are purposely plain. It's your job to change the CSS
  colors and font to match your site, of course.

To run the demo locally:

  ```bash
  npm install
  grunt
  ```

## Usage

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  ```

2. Include plugin's code:

  ```html
  <link href="dist/jquery.topbar.min.css" rel="stylesheet">
  <script src="dist/jquery.topbar.min.js"></script>
  ```

3. Put your plugin HTML on your web page:

  ```html
  <div class="topbar">
      <div class="container">
        This is a notification. You can click it away if you want.
        <button type="button" class="close" data-dismiss="message">&times;</button>
      </div>
  </div>
  ```

4. Call the plugin:

  ```javascript
  $(".topbar").topBar({
    slide: false
  });
  ```

  (Note: `slide: true` hasn't been implemented yet. See https://github.com/audreyr/topbar/issues/1 for more info. If you feel like implementing that feature, go for it and send a pull request!)

### Setting Up jQuery TopBar with Django Messages
  
jQuery TopBar can easily be connected to Django's messages framework, allowing
your web application to display notifications as top bars that can be clicked
away. 

This is similar to the notification bars used in many popular web applications,
such as StackOverflow.

1. Add this to your base template:

  ```html
  {% for message in messages %}
    <div class="topbar topbar-default{% if message.tags %} {{ message.tags }}{% endif %}" id="message_{{ forloop.counter }}">
      <div class="container">
        {{ message }}
        <button type="button" class="close" data-dismiss="message">&times;</button>
      </div>
    </div>
  {% endfor %}
  ```

2. Change the names of the classes in topbar.css to match Django's built-in
message levels of:

  * debug
  * info
  * success
  * warning
  * error

See https://docs.djangoproject.com/en/dev/ref/contrib/messages/#message-tags
for more info.
