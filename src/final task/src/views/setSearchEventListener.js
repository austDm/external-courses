function setSearchEventListener() {
	var domSearch = document.querySelector('.search');
	domSearch.addEventListener('input', 
		function () {
			var domFilters = document.querySelectorAll('.menu li');
			for (var i = 0; i < domFilters.length; i++) {
				if (domFilters[i].classList.contains('menu_active')) break;
			}
			if (i === 0) {
				Store.searchArray = Store.allBooks.slice();
			} else if (i === 1) {
				Store.searchArray = Store.sortedRecentBooks.slice();
			} else if (i === 2) {
				Store.searchArray = Store.sortedPopularBooks.slice();
			} else if (i === 3) {
				Store.searchArray = Store.sortedFreeBooks.slice();
			}
			for (var j = 0; j < Store.searchArray.length; j++) {
					for (var k = 0; k < domSearch.value.length; k++) {
						
						if (Store.searchArray[j].title[k].toLowerCase() !== domSearch.value[k].toLowerCase()) {
							delete Store.searchArray[j];
							break;
						}
					}
				}
			domBooksClear ();
			Store.searchArray.forEach(function(element){domBooksFill (element, Store);});
		}
	);
}