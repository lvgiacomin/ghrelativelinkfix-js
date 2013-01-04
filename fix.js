(function () {
	var pathParts = location.pathname.split('/');
	var projectPath = pathParts.slice(0, 3).join('/');
	var branch = (pathParts.length > 4 && pathParts[3] === 'tree') ? pathParts[4] : "master";
	
	function isRelative(href) { return (href.indexOf('//') == -1) && (href[0] != '/') }
	function fixLinks() {
		//TODO make sure 'article a' covers all possible links.
		var links = $('article a');
		links.each(function () {
			var href = $(this).attr('href')
			if (isRelative(href)) {
				//TODO 'blob' should be tree if the link is not a file
				$(this).attr('href', [projectPath, 'blob', branch, href].join('/'))
				// this class is because we're linking to the gh page of the file and not the raw version
				$(this).addClass('js-slide-to')
			}
		})
	};
	//TODO Call on proper events
	fixLinks();
})();
