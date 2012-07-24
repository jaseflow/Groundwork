/*!
* Groundwork ContentSwitch
* @requires jQuery v1.7.2+
*
* Description
* 
* @author ...
*/
!(function($) {

	window.Groundwork.ContentSwitch = window.Groundwork.ContentSwitch || window.Groundwork.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('.main-nav');
				this.attachEvents();
				$('.active a').click();
			},
			attachEvents: function() {
				$el.on('click', 'a', this.events.contentSwitch);
			},
			events: {
				contentSwitch: function(e) {

					e.preventDefault();

					var address = $('.active a').attr('href');
					var pageTitle =$('.active .grab-title').html();
					var description =$('.active .captioned').html();

					$('.switchable').load(address, prettyPrint);
					$('.content-title').html(pageTitle);
					$('.content-description').html(description);
				}
			}
		}
	}());

})(jQuery);
