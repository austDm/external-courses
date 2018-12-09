export default class Book {
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