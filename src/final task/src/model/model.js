function Model() {
	const model = {};
	model.addedBooks = [];
	model.allHistory = [];
	model.sortedFreeBooks = [];

	model.Book = class Book {
	    constructor(firstname, lastName, categories, cost, image_url, rating, title) {
		    this.author = {};
		    this.author.firstName = firstname;
		    this.author.lastName = lastName;
		    this.categories = categories;
		    this.cost = cost;
		    this.createdAt = this.updatedAt = Date.now();
		    this.image_url = image_url;
		    this.rating = rating;
		    this.title = title;
	    }
	}

	model.Book.sortByRate = () => {
		model.sortedPopularBooks = model.allBooks.slice().sort(
			(a, b) => {
				if (a.rating > b.rating) {
					return -1;
				} else {
					return 1;
				}
			}
		);
	};

	model.Book.sortByTitles = () => {
		model.allBooks.sort(
			(a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return -1;
				} else {
					return 1;
				}
			}
		);
	};

	model.Book.sortByUpdate = () => {
		model.sortedRecentBooks = model.allBooks.slice().sort(
			(a, b) => {
				if (a.updatedAt > b.updatedAt) {	
					return -1;
				} else {
					return 1;
				}
			}
		);
	};

	model.Book.sortFreeBooks = () => {
		model.sortedFreeBooks = [];
		model.allBooks.slice().forEach(
			element => {
				if (element.cost === 0) model.sortedFreeBooks.push(element);
			}
		)
	};

	model.History = class History {
	    constructor(book) {
	        this.book = {};
	        this.date = Date.now();
	        Object.assign(this.book, book);
	    }
	}

	model.addBook = book => model.allBooks.push(book);
	model.addHistory = history => model.allHistory.push(history);

	model.booksUrl = 'https://rsu-library-api.herokuapp.com/books';
	model.filtersUrl = 'https://rsu-library-api.herokuapp.com/filters';
	model.categoriesUrl = 'https://rsu-library-api.herokuapp.com/categories';

	return model;
}