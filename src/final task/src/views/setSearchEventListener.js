function setSearchEventListener() {
	var domSearch = document.querySelector('.search');
	domSearch.addEventListener('input', 
		function () {
			var domFilters = document.querySelectorAll('.menu li');
			var searchValue = domSearch.value.toLowerCase();
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

			Store.searchArray = Store.searchArray.filter(
				book => book.title.toLowerCase().indexOf(searchValue) !== -1
			);
			domBooksClear ();
			Store.searchArray.forEach(function(element){domBooksFill (element, Store);});

			var names = document.querySelectorAll('.name');
			names.forEach(
				function(title) {
					var name = title.innerHTML.toLowerCase();
					var newTitleStart = title.innerHTML.slice(0, name.indexOf(searchValue));
					var newTitleEnd = title.innerHTML.slice(name.indexOf(searchValue) + domSearch.value.length);
					var middle = '<span class = "searchSymb">' + 
						title.innerHTML.slice(name.indexOf(searchValue), name.indexOf(searchValue) + 
						domSearch.value.length) + '</span>';
					title.innerHTML = newTitleStart + middle + newTitleEnd;
				}
			)
		}
	);
}