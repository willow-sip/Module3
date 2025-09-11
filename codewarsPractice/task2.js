"use strict;" 
//Promises Made and Broken
function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate;

  return OrderAPI.getShoppingCartAsync(user)
    .then(cart => {
      shoppingCart = cart;
      return CustomerAPI.getProfileAsync(user);
    })
    .then(profile => {
      zipCode = profile.zipCode;
      shippingRate = calculateShipping(shoppingCart, zipCode);
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    })
    .then(success => {
      console.log(`Your order ${success ? "was" : "was NOT"} placed successfully`);
      return success;
    })
    .catch(err => {
      console.error("Order submission failed:", err.message);
    });
}