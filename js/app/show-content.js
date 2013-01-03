/*!
* ProjectName ToggleActive
* @requires jQuery v1.7.2+
*
* Add '.toggle-active' to a <ul> to toggle active states on menu items.
*
* @author Jason Corbett
*/
;(function($) {

	window.ProjectName.ToggleActive = window.ProjectName.ToggleActive || window.ProjectName.BaseModule(function() {
		
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
				toggleActive: function(e) {
					e.preventDefault();
					var selector = $(this).attr('href');
					$el.find('.module.active').removeClass('active');
					$el.find(selector).addClass('active')
				}
			}
		}
	}());

})(jQuery);