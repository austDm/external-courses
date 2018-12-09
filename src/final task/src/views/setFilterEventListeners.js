export default function setFilterEventListeners(wrapperFilters, filters, Store){
	wrapperFilters.addEventListener('click', 
		function (event) {
			var target = event.target;
			var count = 0;
			for (var i = 0; i < filters.length; i++) {
				if (filters[i] === target) {
					filters[i].classList.add('menu_active');
					count = i + 1;
				} else {
					filters[i].classList.remove('menu_active');
				}
			}
			Store.allFilters.forEach(
				function(element) {
					if (element.id === count) {
						element.active = true;
					} else {
						element.active = false;
					}
				}
			);
		}
	)
	wrapperFilters.addEventListener('click', 
		function (event) {
			var target = event.target;
			if (target.innerHTML === 'All Books') {
				domBooksClear ();
				Store.allBooks.forEach(
					function(book) {
						domBooksFill(book, Store);
					}
				);
			}
			if (target.innerHTML === 'Most Recent') {
				domBooksClear ();
				Store.sortedRecentBooks.forEach(
					function(book) {
						domBooksFill(book, Store);
					}
				);
			}
			if (target.innerHTML === 'Most Popular') {
				domBooksClear ();
				Store.sortedPopularBooks.forEach(
					function(book) {
						domBooksFill(book, Store);
					}
				);
			}
			if (target.innerHTML === 'Free Books') {
				domBooksClear ();
				Store.sortedFreeBooks.forEach(
					function(book) {
						domBooksFill(book, Store);
					}
				);
			}
		}
	);
}

import domBooksClear from './../views/domBooksClear.js';
import domBooksFill from './../views/domBooksFill.js';