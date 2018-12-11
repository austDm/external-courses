function booksUpdate(url){
	var handler = function(request){
		var __DBBooks = JSON.parse(request.responseText);
		
		Store.allBooks = Book.sortByTitles(__DBBooks);
		Store.allBooks.forEach(
			function(book) {
				if (!book.image_url) {
					book.image_url = 'https://rsu-library-api.herokuapp.com/static/images/nocover.jpg'
				}
			}
		);
		
		if (Store.addedBooks[0]) {
			Store.addedBooks.forEach(
				function (element) {
					Store.allBooks.push(element);
				}
			)
		};
		setIdArrayElements(Store.allBooks, 'book');

		Store.sortedRecentBooks = Book.sortByUpdate(Store.allBooks);
		Store.sortedPopularBooks = Book.sortByRate(Store.allBooks);
		Store.sortedFreeBooks = Book.sortFreeBooks(Store.allBooks);

		domBooksClear();
		Store.allBooks.forEach(
			function(book) {
				domBooksFill(book, Store);
			}
		);
		var historyBooks = Store.sortedRecentBooks.slice();
		historyBooks.reverse().forEach(
			function(book) {
				var history = new History(book);
				domHistoryFill (history);
				historyUpdate (history, historyStore);
			}
		);
		setSearchEventListener(Store);
	}
	sendDBRequest(
		{	method: 'GET',
			url: url
		}, handler)
}