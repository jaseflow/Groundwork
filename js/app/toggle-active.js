/*!
* ProjectName ToggleActive
* @requires jQuery v1.7.2+
*
* Description
* Toggles active on menu items
* Add '.toggle-active' to a <ul> to activate.
*
* @author Jason Corbett
*/
!(function($) {

	window.ProjectName.ToggleActive = window.ProjectName.ToggleActive || window.ProjectName.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('.toggle-active');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', 'a', this.events.toggleActive);
			},
			events: {
				toggleActive: function(e) {
					e.preventDefault();
					$(this).closest($el).find('.active').removeClass('active');
					$(this).parent('li').addClass('active');
				}
			}
		}
	}());

})(jQuery);