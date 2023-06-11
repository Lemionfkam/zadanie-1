function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
  this.ID = ID;
  this.name = name;
  this.description = description;
  this.price = price;
  this.brand = brand;
  this.sizes = sizes;
  this.activeSize = activeSize;
  this.quantity = quantity;
  this.date = date;
  this.reviews = reviews;
  this.images = images;

  this.getID = function() {
    return this.ID;
  };

  this.setID = function(newID) {
    this.ID = newID;
  };

  // Implement getters and setters for other properties...

  this.getReviewByID = function(reviewID) {
    return this.reviews.find(function(review) {
      return review.ID === reviewID;
    });
  };

  this.getImage = function(imageIndex = 0) {
    return this.images[imageIndex];
  };

  this.addSize = function(size) {
    this.sizes.push(size);
  };

  this.deleteSize = function(size) {
    var index = this.sizes.indexOf(size);
    if (index !== -1) {
      this.sizes.splice(index, 1);
    }
  };

  this.addReview = function(review) {
    this.reviews.push(review);
  };

  this.deleteReview = function(reviewID) {
    this.reviews = this.reviews.filter(function(review) {
      return review.ID !== reviewID;
    });
  };

  this.getAverageRating = function() {
    if (this.reviews.length === 0) {
      return 0;
    }

    var totalRating = this.reviews.reduce(function(sum, review) {
      return sum + review.rating;
    }, 0);

    return totalRating / this.reviews.length;
  };
}

let a = new Product();

console.log(a);
