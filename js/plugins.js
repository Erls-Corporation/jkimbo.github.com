
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*global jQuery */
/*!	
* FitText.js 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
	$.fn.fitText = function( kompressor ) {
	
			return this.each(function(){
				var $this = $(this);                                     // store the object
				var origFontSize = parseFloat($this.css('font-size'));   // init the font sizes
				var compressor = kompressor || 1;                        // set the compressor

        // Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function () {
					$this.css('font-size', Math.min($this.width() / (compressor*10), origFontSize));
				};

				// Call once to set.
				resizer();
				
				// Call on resize. Opera debounces their resize by default. 
      	$(window).resize(resizer);
      	
			});

	};

})( jQuery );
