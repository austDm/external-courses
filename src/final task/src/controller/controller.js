function Controller(model){
	
	const controller = {};
	
	controller.getLibrary = () => {
		return model.allBooks;
	}
	controller.addToAllLibrary = book => {
		model.allBooks.push(book);
	}
	controller.getFilters = () => {
		return model.allFilters;
	}
	controller.getHistory = () => {
		return model.allHistory;
	}
	controller.addToHistory = history => {
		model.allHistory.push(history);
	}
	controller.historyUpdate = history => {
		model.allHistory.push(history);
	}
	controller.getCategories = () => {
		return model.allCategories;
	}
	controller.setPopularLibrary = () => {
		model.sortedPopularBooks = model.BookSorts.sortByRate(model.allBooks);
	}
	controller.getPopularLibrary = () => {
		return model.sortedPopularBooks;
	}
	controller.setRecentLibrary = () => {
		model.sortedRecentBooks = model.BookSorts.sortByUpdate(model.allBooks);
	}
	controller.getRecentLibrary = () => {
		return model.sortedRecentBooks;
	}
	controller.setFreeLibrary = () => {
		model.sortedFreeBooks = model.BookSorts.sortFreeBooks(model.allBooks);
	}
	controller.getFreeLibrary = () => {
		return model.sortedFreeBooks;
	}
	controller.getBookClass = () => {
		return model.Book;
	}
	controller.getHistoryClass = () => {
		return model.History;
	}


	controller.loadBooks = (updateAllBooks, updateHistory) => {

		const handler = function(request){
			const __DBBooks = JSON.parse(request.responseText);
			
			model.allBooks = model.BookSorts.sortByTitles(__DBBooks);
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

			controller.setRecentLibrary();
			controller.setPopularLibrary();
			controller.setFreeLibrary();

			updateAllBooks();
			var historyBooks = model.sortedRecentBooks.slice();
			historyBooks.reverse().forEach(
			 	book => {
			 		var history = new model.History(book);
			 		controller.historyUpdate(history);
			 	}
			);
			updateHistory ();
		}
		sendDBRequest({method: 'GET', url: model.booksUrl}, handler);
	}

	controller.loadFilters = function(updateFilters) {
		const handler = request => {
			const __DBFilters = JSON.parse(request.responseText);

			model.allFilters = __DBFilters.slice();
			updateFilters();
		}
		sendDBRequest({method: 'GET', url: model.filtersUrl}, handler)
	}

	controller.loadCategories = function(updateCatgories) {
		const handler = request => {
			const __DBCategories = JSON.parse(request.responseText);
			model.allCategories = __DBCategories.slice();
			updateCatgories();
		}
		sendDBRequest({method: 'GET', url: model.categoriesUrl}, handler)
	};
		
	return controller;
}