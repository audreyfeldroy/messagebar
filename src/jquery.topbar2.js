;(function ( $, window, document, undefined ) {
	var topBar = "topBar",
		defaults = {
		slide: false
	};

	function TopBar ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = topBar;
		this.init();
	}

	TopBar.prototype = {
		init: function () {
			console.log("xD");
      $(this).addClass("active");
      $(this.element).on("click", this.close);
		},
		close: function () {
      $(this).removeClass("active");
		}
	};

	$.fn[ topBar ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + topBar ) ) {
				$.data( this, "plugin_" + topBar, new TopBar( this, options ) );
			}
		});
	};

})( jQuery, window, document );