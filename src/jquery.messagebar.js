// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

  // undefined is used here as the undefined global variable in ECMAScript 3 is
  // mutable (ie. it can be changed by someone else). undefined isn't really being
  // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
  // can no longer be modified.

  // window and document are passed through as local variable rather than global
  // as this (slightly) quickens the resolution process and can be more efficiently
  // minified (especially when both are regularly referenced in your plugin).

  // Create the defaults once
  var messageBar = "messageBar",
    defaults = {
      slide: false,
      fade: false
    };

  // The actual plugin constructor
  function MessageBar ( element, options ) {
    this.element = element;
    // jQuery has an extend method which merges the contents of two or
    // more objects, storing the result in the first object. The first object
    // is generally empty as we don't want to alter the default options for
    // future instances of the plugin
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = messageBar;
    this.init();
  }

  MessageBar.prototype = {
    init: function () {
      // Place initialization logic here
      // You already have access to the DOM element and
      // the options via the instance, e.g. this.element
      // and this.settings
      // you can add more functions like the one below and
      // call them like so: this.yourOtherFunction(this.element, this.settings).
      $(this.element).data("messageBar-settings", this.settings);
      $(this.element).on("click", this.close);
    },
    close: function () {
      // Close the notification
      var $parent = $(this);
      var $settings = $(this).data("messageBar-settings");
      if ($settings.slide) {
        $parent.slideUp();
      } else if ($settings.fade) {
        $parent.fadeOut();
      } else {
        $parent.remove();
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ messageBar ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + messageBar ) ) {
        $.data( this, "plugin_" + messageBar, new MessageBar( this, options ) );
      }
    });
  };

})( jQuery, window, document );