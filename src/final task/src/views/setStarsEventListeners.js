function setStarsEventListeners (book, stars, Store) {
	book.addEventListener('click', 
		function (event) {
			var target = event.target;
			if (target.classList.contains('star')) {
		      	for (var i = 0; i < 5; i++){
					if (target === stars[i]) {
				  		var count = i;
				  		break;				  		
				  	}
				}
				for (i = 0; i < 5; i++) {
				  	if (i <= count) {
				  		stars[i].classList.remove('oncursor');
				  		stars[i].classList.add('active');
				  	} else {
				  		stars[i].classList.remove('active', 'oncursor');
				  	}
				}
				Store.allBooks.forEach(
					function(element){
						if (element.id === book.getAttribute('id')) {
							element.rating = count + 1;
						}
					}
				);
				Store.sortedPopularBooks = Book.sortByRate(Store.allBooks);
			}
		}
	);

	book.addEventListener('mouseover', 
		function (event) {
			var target = event.target;
			
			if (target.classList.contains('star')) {
			    for (var i = 0; i < 5; i++){
					if (target === stars[i]) {
				  		var n = i;
				  	}
				}
				for (i = 0; i < 5; i++) {
				  	if (i <= n) {
				  		stars[i].classList.add('oncursor');
				  	} else {
				  		stars[i].classList.remove('oncursor');
				  	}
				}
			}
		}
	);

	book.addEventListener('mouseout', function() {
			for (var i = 0; i < 5; i++) {
			  	stars[i].classList.remove('oncursor');
			}
		}
	);
}