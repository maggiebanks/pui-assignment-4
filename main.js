// storage = window.localStorage;
// if (storage.getItem("cart") == ""){
//     storage.setItem("cart",JSON.stringify([]));
// }

// cart = JSON.parse(storage.getItem("cart"));

// function Addcart(item) {
//     if (storage.getItem("cart") == ""){
//     storage.setItem("cart",JSON.stringify([]));
//     }
//     cart = JSON.parse(storage.getItem("cart"));
//     c.push(item);
//     storage.setItem("cart", JSON.stringify(cart));
//     }

// function callCart(){
//     if (localStorage.c == "") {
//     storage.setItem("cart", JSON.stringify([]));
//     }
//     cart = JSON.parse(storage.getItem("cart"));
//     return cart;
//     }

// function saveCart(cart) {
//     storage.setItem("cart",JSON.stringify(c));
//     }

// function removeItem(i, cart) {
//     cart.splice(i,1);
//     saveCart(cart);
//     }

// once clicking add to cart
// get the options selected
// create the order object
// add the order into the cart by doing cart.push(order);
// storage.setItem("cart",JSON.stringify(cart))

function order(shape, quantity, price, cart) {
  this.shape = shape;
  this.quantity = quantity;
  this.price = price;
  this.cart = cart;
}

var shapes = ["square", "round", "dog"];


$(document).ready(function(){

    // shapes of pillows 
    $("#square").click(function(){  
        order.shape = shapes[0];   
        $("#shape-image").attr("src","Images/square-pillow.png"); 
    });

    $("#round").click(function(){  
        $(order.shape = shapes[0]);   
        $("#shape-image").attr("src","Images/round-pillow.png");
    });

    $("#dog").click(function(){  
        $(order.shape = shapes[0]);   
        $("#shape-image").attr("src","Images/dog-pillow.png");
    });

    $("#bear").click(function(){  
        $(order.shape = shapes[0]);   
        $("#shape-image").attr("src","Images/bear-pillow.png");
    });

    $("#bunny").click(function(){  
        $(order.shape = shapes[0]);   
        $("#shape-image").attr("src","Images/bunny-pillow.png");
    });

    $("#cat").click(function(){  
        $(order.shape = shapes[0]);   
        $("#shape-image").attr("src","Images/cat-pillow.png");
    });

    //# of pillows
    $("#onepack").click(function(){  
        $(order.shape = shapes[0]);   
        $("#price").text("$80");
    });

    $("#twopack").click(function(){  
        $(order.quantity = quantity[1]);   
        $("#price").text("$60");
    });

    $("#fourpack").click(function(){  
        $(order.quantity = quantity[1]);   
        $("#price").text("$120");
    });

    // $(function() {
    //     if $("twopack").click(function)(){ && $("#shape-image").click(function){
    //         $("#price").text("$120");
    //     }
    // });
    // });

    // pink sticky hover for selected pillow shape
    $(function() {

        $('.shapes img').click(function() {
           $('.shapes img').removeClass('active-shape');
           var el = $(this);
           el.addClass('active-shape');
        })


      })

    // var pillowCount = 0;

    // $('.add').click(function (){
    //     localStorage.setItem("quantity", true);
    //     pillowCount ++;
    //     order = {};
    //     order.price = get your price value;
    //     order.quantiy = get your sleected quantity
    //     order.shape = get your shape
    //     cart.push(order);
    //     storage.setItem("cart",JSON.stringify(cart));

    //     $('#pillowCount').html(pillowCount).css('display', 'block');    
    // }); 

    // $('.clear').click(function() {
    //   pillowCount = 0;
    //   $('#pillowCount').html('').css('display', 'none');
    //   $('#cartItems').html('');
    // }); 

});



