/*!
* ProjectName Base Module
* @requires jQuery v1.7.2+
*
* Provides global jquery and project namespaces
* 
* Also provides a module pattern factory (?) that initialises modules on docready
* 
* @author ...
*/
jQuery.noConflict();

!(function($) {

    // Project namespace to avoid contaminating global namespace
    window.ProjectName = window.ProjectName || {};

    // Base module. Ensures init method is called on jquery's document ready
    //  Could potentially add other common module functionality here
    //  The || on modules ensures they can only be instantiated once (Singleton)
    window.ProjectName.BaseModule = window.ProjectName.BaseModule || function(module) {
        $(function() {
            if (module.init) {
                module.init();
            }
        });
        return module;
    }

    // Generic docready - remove no-js html class, since we obviously have js
    $(function() {
        $('html').removeClass('no-js');
    });

})(jQuery);

// Silence IE JS errors caused by missing console
if (typeof(console) === 'undefined') {
    window.console = {
        log: function() {}
    }
}

// jQuery :contains expression - case insensitive
jQuery.expr[':'].Contains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

// Simple HTML encode/decode functionality
// http://stackoverflow.com/questions/1219860/javascript-jquery-html-encoding
function htmlEncode(value){
  return jQuery('<div/>').text(value).html();
}
function htmlDecode(value){
  return jQuery('<div/>').html(value).text();
}