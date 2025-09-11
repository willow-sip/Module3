"use strict;"
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    setDiscount(percent) {
        ProductsDiscount.set(this, percent);
    }

    getDiscount() {
        return ProductsDiscount.get(this) ?? 0;
    }
}

const ProductsDiscount = new WeakMap();
let prod1 = new Product("Laptop", 1200);
let prod2 = new Product("Phone", 800);
let prod3 = new Product("Tablet", 500);

prod1.setDiscount(10);
prod2.setDiscount(15);
prod3.setDiscount(5);

console.log("Discounts before deletion:");
console.log("Laptop:", prod1.getDiscount());
console.log("Phone:", prod2.getDiscount());
console.log("Tablet:", prod3.getDiscount());

prod2 = null;

setTimeout(() => {
  console.log("\nDiscounts after deletion:");
  console.log("Laptop:", prod1.getDiscount());
  console.log("Tablet:", prod3.getDiscount());
}, 1000); //timeout used for everything to work right on slower engines