(function () {
	var projectPath = location.pathname.split('/', 3).join('/');
	function isRelative(href) { return (href.indexOf('//') == -1) && (href[0] != '/') }
	function fixLinks() {
		//TODO make sure 'article a' covers all possible links.
		var links = $('article a');
		links.each(function () {
			var href = $(this).attr('href')
			if (isRelative(href)) {
				//TODO 'blob' should be tree if the link is not a file
				//TODO 'master' should be sensitive to context
				$(this).attr('href', [projectPath, 'blob', 'master', href].join('/'))
				// this class is because we're linking to the gh page of the file and not the raw version
				$(this).addClass('js-slide-to')
			}
		})
	};
	//TODO Call on proper events
	fixLinks();
})();
