function Controller(model) {
	
	const controller = {};

	controller.sortLibrary = sortBy => {
		switch (sortBy) {
			case 'free': 
				model.Book.sortFreeBooks();
				break;
			case 'recent':
				model.Book.sortByUpdate();
				break;
			case 'popular':
				model.Book.sortByRate(); 
				break;
			case 'titles':
				model.Book.sortByTitles();
				break;
		};
	}

	controller.getSortLibrary = sortBy => {
		switch (sortBy) {
			case 'free': 
				return model.sortedFreeBooks;
			case 'recent':
				return model.sortedRecentBooks;
			case 'popular':
				return model.sortedPopularBooks; 
			case 'titles':
				return model.allBooks;
		};
	}
	
	controller.getFilters = () => model.allFilters;
	controller.getHistory = () => model.allHistory;
	controller.getCategories = () => model.allCategories;

	controller.getBookClass = () => model.Book;
	controller.getHistoryClass = () => model.History;

	controller.addToAllLibrary = book => model.addBook(book);
	controller.addToHistory = history => model.addHistory(history);

	controller.booksRequestHandler = function(request) {
		const __DBBooks = JSON.parse(request.responseText);
		
		model.allBooks = __DBBooks;
		controller.sortLibrary('titles');
		model.allBooks.forEach(
			 book => {
				 if (!book.image_url) {
					 book.image_url = 'https://rsu-library-api.herokuapp.com/static/images/nocover.jpg'
				 }
			 }
		);
		
		if (model.addedBooks[0]) {
			model.addedBooks.forEach(
				element => {
					model.allBooks.push(element);
				}
			)
		};
		setIdArrayElements(model.allBooks, 'book');

		controller.sortLibrary('recent');
		controller.sortLibrary('free');
		controller.sortLibrary('popular');

		var historyBooks = controller.getSortLibrary('recent').slice();
		historyBooks.reverse().forEach(
			 book => {
				 var history = new model.History(book);
				 controller.addToHistory(history);
			 }
		);	
	}

	controller.loadBooks = (updateAllBooks, updateHistory) => {
		sendDBRequest(
			{method: 'GET', url: 'https://rsu-library-api.herokuapp.com/books'}, 
			data => {
				controller.booksRequestHandler(data);
				updateAllBooks();
				updateHistory();
			}
		);
	}

	controller.loadFilters = function(updateFilters) {
		const handler = request => {
			const __DBFilters = JSON.parse(request.responseText);

			model.allFilters = __DBFilters.slice();
			updateFilters();
		}
		sendDBRequest({method: 'GET', url: 'https://rsu-library-api.herokuapp.com/filters'}, handler)
	}

	controller.loadCategories = function(updateCatgories) {
		const handler = request => {
			const __DBCategories = JSON.parse(request.responseText);
			model.allCategories = __DBCategories.slice();
			updateCatgories();
		}
		sendDBRequest({method: 'GET', url: 'https://rsu-library-api.herokuapp.com/categories'}, handler)
	};
		
	return controller;
}