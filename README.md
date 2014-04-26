# jQuery MessageBar [![Build Status](https://secure.travis-ci.org/audreyr/messagebar.png?branch=gh-pages)](https://travis-ci.org/audreyr/messagebar) [![devDependencies](https://david-dm.org/audreyr/messagebar.png)](https://david-dm.org/audreyr/messagebar#info=devDependencies)

A top bar for notification messages. Dismiss it by clicking the x. Works with Django, but that's optional.

* Free software: MIT License (http://audreyr.mit-license.org/)

## Screenshot and Demo

Here is a screenshot of MessageBar being used on https://www.djangopackages.com:

![Screenshot of MessageBar](messagebar-screenshot.png)

To see a live demo of several MessageBars in action, see http://audreyr.github.io/messagebar/demo/.

* They correspond to Bootstrap's **default**, **primary**, **success**, **info**,
  **warning**, and **danger** styles.
* The default MessageBars are purposely plain. It's your job to change the CSS
  colors and font to match your site, of course.

To run the demo locally:

  ```bash
  npm install
  grunt
  ```

## Usage

1. Copy the appropriate files from `dist/` into your project. For example, if you want the minified jQuery plugin version of this, copy:

  * `dist/jquery.messagebar.min.css`
  * `dist/jquery.messagebar.min.js`

2. Include jQuery (any version will do):

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  ```

3. Include plugin's code:

  ```html
  <link href="dist/jquery.messagebar.min.css" rel="stylesheet">
  <script src="dist/jquery.messagebar.min.js"></script>
  ```

4. Put your plugin HTML on your web page:

  ```html
  <div class="messagebar">
      <div class="container">
        This is a notification. You can click it away if you want.
        <button type="button" class="close" data-dismiss="message">&times;</button>
      </div>
  </div>
  ```

5. Call the plugin:

  ```javascript
  $(".messagebar").messageBar({
    slide: false
  });
  ```

  (Note: `slide: true` hasn't been implemented yet. See https://github.com/audreyr/messagebar/issues/1 for more info. If you feel like implementing that feature, go for it and send a pull request!)

### Setting Up jQuery MessageBar with Django Messages
  
jQuery MessageBar can easily be connected to Django's messages framework, allowing
your web application to display notifications as top bars that can be clicked
away. 

This is similar to the notification bars used in many popular web applications,
such as StackOverflow.

1. Add this to your base template:

  ```html
  {% for message in messages %}
    <div class="messagebar messagebar-{% if message.tags %}{{ message.tags }}{% endif %}" id="message_{{ forloop.counter }}">
      <div class="container">
        {{ message }}
        <button type="button" class="close" data-dismiss="message">&times;</button>
      </div>
    </div>
  {% endfor %}
  ```

2. Change the names of the classes in messagebar.css to match Django's built-in
message levels of:

  * debug
  * info
  * success
  * warning
  * error

See https://docs.djangoproject.com/en/dev/ref/contrib/messages/#message-tags
for more info.

Once you've done this, your styles should look something like:

  ```css
  /* messagebar by audreyr ~ https://github.com/audreyr/messagebar */
  /*! jquery.messagebar.min.css */.messagebar{font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#000;text-shadow:.3px .3px .3px #FFF;padding:10px 0}.messagebar-default{background-color:#c4c4c4;border-bottom:1px solid #999}.messagebar-debug{background-color:#84b3dc;border-bottom:1px solid #428BCA}.messagebar-success{background-color:#a3d7a3;border-bottom:1px solid #5CB85C}.messagebar-info{background-color:#9ed9eb;border-bottom:1px solid #5BC0DE}.messagebar-warning{background-color:#f6cd93;border-bottom:1px solid #F0AD4E}.messagebar-error{background-color:#e89996;border-bottom:1px solid #D9534F}button.close{padding:0;cursor:pointer;background:rgba(0,0,0,0);border:0;-webkit-appearance:none}.close{float:right;font-size:18px;font-weight:700;line-height:.8em;color:#000;text-shadow:0 1px 0 #FFF;opacity:.2;filter:alpha(opacity=20)}
  ```
