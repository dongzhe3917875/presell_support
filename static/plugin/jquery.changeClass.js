var $ = require('modulesJS/jquery/dist/jquery.min.js')
$.fn.changeClass = function (options) {
	var $this = $(this)
	var defaultOption = {

	}
	var optionsValue = $.extend(true, defaultOption, options)
	for (var item in options) {
		(options[item] && Boolean($this.addClass(item))) || ($this.removeClass(
			item))
	}

	function bindObjPropToDomElem (obj, domElem) {
		for (var item in obj) {
			Object.defineProperty(obj, item, {
				set: function (bool) {
					(bool && Boolean(domElem.addClass(item))) || (domElem.removeClass(
						item))
					optionsValue[item] = bool
				},
				get: function () {
					return optionsValue[item]
				}
			})
		}
	}
	bindObjPropToDomElem(options, $this)
	return $this
}
