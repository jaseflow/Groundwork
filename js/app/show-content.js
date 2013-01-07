/*!
* ProjectName ShowContent
* @requires jQuery v1.7.2+
*
* Will reveal hidden modules using the href attribute to find the correct module to reveal
*
* @author Jason Corbett
*/
;(function($) {

	window.ProjectName.ShowContent = window.ProjectName.ShowContent || window.ProjectName.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('body');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', '.show-content', this.events.showContent);
			},
			events: {
				showContent: function(e) {
					e.preventDefault();
					var selector = $(this).attr('href');
					console.log(selector);
					$el.find('.module.active').removeClass('active');
					$el.find(selector).addClass('active')
				}
			}
		}
	}());

})(jQuery);