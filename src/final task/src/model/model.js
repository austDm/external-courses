function Model() {
	const model = {};
	model.addedBooks = [];
	model.allHistory = [];
	model.sortedFreeBooks = [];

	class Book {
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
		
		static sortByRate() {
			model.sortedPopularBooks = model.allBooks.slice().sort(
				(a, b) => a.rating > b.rating ? -1 : 1
			);
		};

		static sortByTitles () {
			model.allBooks.sort(
				(a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
			);
		};

		static sortByUpdate () {
			model.sortedRecentBooks = model.allBooks.slice().sort(
				(a, b) => a.updatedAt > b.updatedAt ? -1 : 1
			);
		};

		static sortFreeBooks () {
			model.sortedFreeBooks = model.allBooks.filter(element => element.cost === 0);
		};
	}

	model.Book = Book;

	class History {
	    constructor(book) {
	        this.book = {};
	        this.date = Date.now();
	        Object.assign(this.book, book);
	    }
	}

	model.History = History;

	model.addBook = book => model.allBooks.push(book);
	model.addHistory = history => model.allHistory.push(history);

	return model;
}