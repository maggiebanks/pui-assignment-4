storage = window.localStorage;
if (storage.getItem("cart") == null){
    storage.setItem("cart",JSON.stringify([]));
}

cart = JSON.parse(storage.getItem("cart"));

var shapes = ["square", "round", "dog"];

var curShape = "square";
var curQuantity = 1;

$(document).ready(function(){

    $("#itemCount").text(cart.length);

    // shapes of pillows 
    $(".shapes").click(function(){
        id = $(this).find("img").attr("id");
        curShape = id;
        $("#shape-image").attr("src","Images/"+id+"-pillow.png");
    });

    //# of pillows
    $("#onepack").click(function(){    
        $("#price").text("$30");
        curQuantity = 1;
    });

    $("#twopack").click(function(){     
        $("#price").text("$60");
        curQuantity = 2;
    });

    $("#fourpack").click(function(){     
        $("#price").text("$120");
        curQuantity = 4;
    });

    // pink sticky hover for selected pillow shape
    $(function() {

        $('.shapes img').click(function() {
           $('.shapes img').removeClass('active-shape');
           var el = $(this);
           el.addClass('active-shape');
        })


      })

    $('.add').click(function (){
        cart = JSON.parse(storage.getItem("cart"));
        console.log(cart);
        order = {};
        order.quantity = curQuantity;
        order.price = parseInt($("#price").text().slice(1)) * curQuantity;
        order.shape = curShape;
        order.title = "Couch Pillow";
        cart.push(order);
        $("#itemCount").text(cart.length);
        console.log(order);
        storage.setItem("cart",JSON.stringify(cart));   
    }); 

});



