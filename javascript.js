document.addEventListener('DOMContentLoaded', function() {
    Ecwid.OnAPILoaded.add(function()
  { carVisible()
    Ecwid.OnCartChanged.add(function(cart){
      carVisible()
  })
  })
} )

function addItem(productID) {
    Ecwid.OnAPILoaded.add(function() {
      var product = {
        id: productID,
        qty: 1
      };

      Ecwid.Cart.addProduct(product);


})}

function carVisible() {
  Ecwid.Cart.get(function(cart){

    const carImage = document.getElementById("car");
    const messageText = document.getElementById("carReady");

    if (cart.items.length >= 5) {
      messageText.classList.remove("hidden");
      carImage.classList.add("hidden");
    } else {
      messageText.classList.add("hidden");
      carImage.classList.remove("hidden");
    }
  }
)}




 