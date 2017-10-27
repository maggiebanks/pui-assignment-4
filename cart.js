$(document).ready(function(){
    cart = JSON.parse(window.localStorage.getItem("cart"));
    $("#itemCount").text(cart.length);
    for(var i = 0; i < cart.length; i++){
        currentOrder = cart[i];
        orderHTML = `<div class = "checkout-order">`;
        orderHTML += `<img class= "checkout-order-image" src="Images/`+currentOrder.shape+`-pillow.png">`;
        orderHTML += `<div class = "col2"><p class= "checkout-order-title">`+currentOrder.title+`</p>`;
        orderHTML += `<p class= "checkout-order-shape">`+currentOrder.shape+`</p>`;
        orderHTML += `<p class= "checkout-order-quantity">`+currentOrder.quantity+`</p></div>`;
        orderHTML += `<div class = "col3"><p class= "checkout-order-price">`+currentOrder.price+`</p></div>`;

        orderHTML += `<div class="clear"></div><span class ="remove" id ="`+i+`">X</span></div>`;
        $("#root").append(orderHTML);
    }
    $(".remove").click(function(){
        id = $(this).attr("id");
        $(this).parent().hide();
        cart.splice(id,1);
        $("#itemCount").text(cart.length);

    })
});