var removeCartItem = document.getElementsByClassName("btn-add");
console.log(removeCartItem);
for (var i = 0; i < removeCartItem.length; i++) {
  var button = removeCartItem[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
  });
}
