//*******************************************************
//   create a section of website that will hold a list of orders that were submitted, will generate an HTML
//   when user submits the form, add the new coffee order to the list
//   when user hits the reset button, clear out the form
//*******************************************************

$(function(){ 

    // Page has loaded
    // need to pull the old coffee orders from localStorage

    var orders = [];
    var oldOrdersJSON = localStorage.getItem("coffeeOrders");
    var oldOrders = JSON.parse(oldOrdersJSON);

    if (oldOrders != null) {
        orders = oldOrders;
    } 
    
    // show the old orders to the screen
    var oldOrdersHTML = "";
    orders.forEach(function(currentOrder){
        oldOrdersHTML += renderCoffeeOrder(currentOrder);
    });
    $('#orderList').append(oldOrdersHTML);

    function renderCoffeeOrder(order) {
        var finalHTML = '<div class="order">'; 

        finalHTML += '<span>' + order.coffeeOrder + '</span>';
        finalHTML += '<span>' + order.email + '</span>';
        finalHTML += '<span>' + order.size + '</span>';
        finalHTML += '<span>' + order.flavorShot + '</span>';
        finalHTML += '<span>' + order.strength + '</span>';
        finalHTML += '<span class="delete">X</span>'; //check previous code and check HTML to see if I need to add delete stuff
        finalHTML += '</div>';

        return finalHTML; 

    }

    // Listen for when people submit the form
    $('form').submit(function (e){
        // code will execute when the form is submitted
        e.preventDefault();

        // define some variables, set them equal to the values of the form fields
        // var coffeeOrder = $('#coffeeOrder').val();
        // var email = $('#emailInput').val();
        // var size = $('input:checked').val();
        // var flavorShot = $('#flavorShot').val();
        // var strength = $('#strengthLevel').val(); 
        
        var currentOrder = {
            coffeeOrder: $('#coffeeOrder').val(),
            email: $('#emailInput').val(),
            size: $('input:checked').val(),
            flavorShot: $('#flavorShot').val(),
            strength: $('#strengthLevel').val(), 
        };

        orders.push(currentOrder);

        // get the rendered HTML ^^^ to show up in the DOM
        var renderedHTML = renderCoffeeOrder(currentOrder); 
        $('#orderList').append(renderedHTML);

        // When an order is submitted, make sure it gets saved into local storage
        var ordersJSON = JSON.stringify(orders);
        localStorage.setItem("coffeeOrders", ordersJSON);


    });
});


// $(#orderList).on('click' + delete + something) // check old code