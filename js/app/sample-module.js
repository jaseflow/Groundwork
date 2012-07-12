/*!
* ProjectName SampleModule
* @requires jQuery v1.7.2+
*
* Description
* 
* @author ...
*/
!(function($) {

	window.ProjectName.SampleModule = window.ProjectName.SampleModule || window.ProjectName.BaseModule(function() {
		
		var $el;

		return {
			init: function() {
				$el = $('.sample-module');
				this.attachEvents();
			},
			attachEvents: function() {
				$el.on('click', '.some-action', this.events.someAction);
			},
			events: {
				someAction: function(e) {
					e.preventDefault();
					$el.find('.some-element').html('Some Content');
				}
			}
		}
	}());

})(jQuery);


/*
<div class="sample-module" style="padding: 20px;">
	<button class="some-action">Do Something</button>	
	<span class="some-element"></span>
</div>
*/