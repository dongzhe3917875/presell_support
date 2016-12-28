var $ = require('modulesJS/jquery/dist/jquery.min.js')
require('./jquery.changeClass.js')
module.exports = $.fn.select = function (option) {
	var defaultOption = {
		selectMap: new WeakMap()
	}
	var options = $.extend(true, {}, defaultOption, option)
	var selectMap = options.selectMap
	var selectAllNode = []
	var documentEvent = false
	// 根据节点计算高度
	function heightSlide (node, status) {
		var height = 0
		if (status) {
			Array.prototype.slice.call(node.childNodes).forEach(function (child) {
				if (child.nodeType === 1) {
					var oStyle = window.getComputedStyle(child)
					height = height + child.clientHeight + (parseInt(
							oStyle.borderTopWidth) ||
						0) + (parseInt(oStyle.borderBottomWidth) || 0)
				}
			})
			height = height - parseInt(1) + 'px'
		}
		node.style.height = height
	}
	var oManager = {
		setMapBindClass: function (node, obj) {
			var status = !selectMap.has(node)
			if (status) {
				selectMap.set(node, obj)
				$(node).changeClass(this.getNodeofMap(node))
			}
			return status
		},
		getNodeofMap: function (node) {
			return selectMap.get(node)
		},
		getStatus: function (node, className) {
			return selectMap.get(node)[className]
		},
		setStatus: function (node, className, bool) {
			selectMap.get(node)[className] = bool
		},
		reverseStatus: function (node, className) {
			this.getNodeofMap(node)[className] = !this.getNodeofMap(node)[className]
		},
		getDomArray: function (nodes) {
			return Array.prototype.slice.call(nodes)
		},
		slideUp: function (node) {
			var showSelectNode = node.previousSibling
			if (selectMap.has(node)) {
				this.setStatus(node, 'hide_select', true)
			}

			if (selectMap.has(showSelectNode)) {
				this.setStatus(showSelectNode, 'noborder', false)
			}

			heightSlide(node, false)
		}
	}
	return this.each(function () {
		var $this = $(this)
		var showSelect = $this.find('.show_select')
		console.log(showSelect)
		// var selectAll = $this.find('.select_all')
		selectAllNode.push(this.querySelector('.select_all'))
		// var selectAllNode = document.querySelectorAll('.select_all')
		var selectItem = '.select_item'
		// var imitateSelect = $this

		showSelect.on('click', function (event) {
			event.stopPropagation()
			var target = this
			oManager.setMapBindClass(target, {
				'noborder': false
			})
			var selectAllNodee = target.nextSibling
			if (!oManager.setMapBindClass(selectAllNodee, {
				'hide_select': false
			})) {
				oManager.reverseStatus(selectAllNodee, 'hide_select')
			}

			heightSlide(selectAllNodee, !oManager.getStatus(
				selectAllNodee, 'hide_select'))

			oManager.reverseStatus(target, 'noborder')

			var selectAllArray = oManager.getDomArray(selectAllNode)
			selectAllArray.forEach(function (ele) {
				if (ele !== selectAllNodee) {
					oManager.slideUp(ele)
				}
			})
		})

		if (!documentEvent) {
			document.addEventListener('click', function (event) {
				var selectAllArray = oManager.getDomArray(selectAllNode)
				selectAllArray.forEach((ele) => oManager.slideUp(ele))
			})
			documentEvent = true
		}

		$this.on('click', selectItem, function (event) {
			event.stopPropagation()
			var selectValue = $(event.target).text()
			var showItem = $(this).parents('.imitate_select').find(
				'.show_item')
			var selectAllNodee = this.parentNode
			showItem.text(selectValue)
			oManager.slideUp(selectAllNodee)
		})
	})
}
