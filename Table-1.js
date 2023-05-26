function Product(ID, name, description, price, brand, sizes, quantity, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = ""; 
    this.quantity = quantity;
    this.date = new Date();
    this.reviews = [];
    this.images = images || []; 
  
    this.addReview = function(review) {
        this.reviews.push(review);
    };
}

var product1 = new Product('Random Index', 'Phone', 'Телефон, красивый, белый', 4000, 'Kuala', ['X', 'XL', 'XXL', 'XXXL'], 10, ['image1.jpg', 'image2.jpg']);
console.log(product1);

var review1 = {
    user: 'User1',
    rating: 4,
    comment: 'Отличный телефон!'
};
product1.addReview(review1);

var review2 = {
    user: 'User2',
    rating: 5,
    comment: 'Лучший телефон, который я когда-либо имел!'
};
product1.addReview(review2);

console.log(product1);
