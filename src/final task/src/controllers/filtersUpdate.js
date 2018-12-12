function filtersUpdate(url){
	var handler = function(request){
		__DBFilters = JSON.parse(request.responseText);

		Store.allFilters = __DBFilters.slice();
		Store.allFilters.forEach(function(filter) {
	 		domFiltersFill(filter);
		});

		var filters = document.querySelectorAll('.menu li');
		var wrapperFilters = document.querySelector('.menu');
		setFilterEventListeners(wrapperFilters, filters);
	}
	sendDBRequest(
		{	method: 'GET',
			url: url
		}, handler)
}