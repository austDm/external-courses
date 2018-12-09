export default function filtersUpdate(url, __DBFilters, Store){
	var handler = function(request){
		__DBFilters = JSON.parse(request.responseText);

		Store.allFilters = __DBFilters.slice();
		Store.allFilters.forEach(function(filter) {
	 		domFiltersFill(filter);
		});

		var filters = document.querySelectorAll('.menu li');
		var wrapperFilters = document.querySelector('.menu');
		setFilterEventListeners(wrapperFilters, filters, Store);
	}
	SendDBRequest('GET', url, '', handler)
}

import domFiltersFill from './../views/domFiltersFill.js';
import setFilterEventListeners from './../views/setFilterEventListeners.js';
import SendDBRequest from './../utils/SendDBRequest.js';