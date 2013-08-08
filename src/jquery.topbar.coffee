# Note that when compiling with coffeescript, the plugin is wrapped in another
# anonymous function. We do not need to pass in undefined as well, since
# coffeescript uses (void 0) instead.
do ($ = jQuery, window, document) ->

	# window and document are passed through as local variable rather than global
	# as this (slightly) quickens the resolution process and can be more efficiently
	# minified (especially when both are regularly referenced in your plugin).

	# Create the defaults once
	topBar = "topBar"
	defaults =
		property: "value"

	# The actual plugin constructor
	class TopBar
		constructor: (@element, options) ->
			# jQuery has an extend method which merges the contents of two or
			# more objects, storing the result in the first object. The first object
			# is generally empty as we don't want to alter the default options for
			# future instances of the plugin
			@settings = $.extend {}, defaults, options
			@_defaults = defaults
			@_name = topBar
			@init()

		init: ->
			# Place initialization logic here
			# You already have access to the DOM element and the options via the instance,
			# e.g., @element and @settings
			console.log("xD")

		yourOtherFunction: ->
			# some logic

	# A really lightweight plugin wrapper around the constructor,
	# preventing against multiple instantiations
	$.fn[topBar] = (options) ->
		@each ->
			if !$.data(@, "plugin_#{topBar}")
				$.data(@, "plugin_#{topBar}", new TopBar(@, options))