(function() {
	var f = function(id) {
		var s = document.getElementById(id);
		s.parentNode.removeChild(s);
		Object.defineProperty(window, 'console', {configurable: false, value: window.console});
	};
	var s = document.createElement('script');
	s.id = 'handsoff' + Math.random();
	s.appendChild(document.createTextNode("(" + f + ")('" + s.id + "')"));
	var h = (document.head||document.documentElement);
	h.insertBefore(s, h.firstCild);
})();
