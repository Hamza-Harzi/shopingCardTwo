if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    let removeCartItemsButton = document.getElementsByClassName("btn-danger");

    for (var i = 0; i < removeCartItemsButton.length; i++) {
        let button = removeCartItemsButton[i];
        button.addEventListener("click", removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName("cart-quantity-input");

    for (var i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    console.log("a");
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    let cartItmeContainer = document.getElementsByClassName("cart-items")[0];
    let cartRows = cartItmeContainer.getElementsByClassName("cart-row");
    let total = 0;

    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        let quantityElement = cartRow.getElementsByClassName(
            "cart-quantity-input"
        )[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));

        let quantity = quantityElement.value;

        total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100; // tna9es lar9am li ba3ed l ,
    console.log(document.getElementsByClassName("cart-total-price"));
    document.getElementsByClassName("cart-total-price")[0].innerText =
        "$" + total;
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}