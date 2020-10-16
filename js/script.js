 function PizzaOrder(pizzaTypes, pizzaSizes, pizzaQuantity, pizzaCrust, pizzaTopping) {
     this.types = pizzaTypes;
     this.sizes = pizzaSizes;
     this.Qnty = pizzaQuantity;
     this.Crust = pizzaCrust;
     this.Topping = pizzaTopping;
 }

 var size = {
     small: 2000,
     medium: 4000,
     large: 9000
 }
 var crust = {
     cripsy: 1000,
     stuffed: 1500,
     glutenfree: 2000
 }
 var topping = {
     BlackPepper: 1100,
     Onions: 1100

 }
 PizzaOrder.prototype.orderCalc = function () {
     return (size[this.size] + crust[this.crust] + this.topping) * (this.Qnty);
 }

 function resetFields() {
     $("#type").val("");
     $("#size").val("");
     $("#quantity").val("");
     $("#crust").val("");
     $("#topping").val("");
 }
 $("#orderForm").submit(function (event) {
             event.preventDefault();
             var typeOf = $("#type option:checked").val();
             var quantityOf = $("#quantity option:checked").val();
             var sizeOf = $("#size option:checked").val();
             var crustsOf = $("#crust option:checked").val();
             var toppingOf = $("#topping option:checked").val();
             console.log(typeOf);
             console.log(quantityOf);
             console.log(sizeOf);
             console.log(crustOf);
             console.log(toppingOf);

             var toppingOf = [];

             $("#topping option:checked").each(function () {
                 toppingOf.push($(this).val());
                 console.log(toppingOf.join(","));
             });
             var totalCostTopping = 0;
             for (var i = 0; i < toppingOf.length; i++) {
                 totalCostTopping += parseInt(topping[toppingOf]);
                 console.log(totalCostTopping);
             }
             var newPizza = new PizzaOrder(sizeOf, quantityOf, crustsOf, totalCostTopping);
             var order = parseInt(newPizza.orderCalc());
             $("#choices").append("<p>Type:" + typeOf + "</p>", "<p>Size:" + sizeOf + "</p>",
                 "<p>Quantity: " + quantityOf + "</p>", "<p>Crust" + crustsOf + "</p>", "<p>Total Price" + order + "</p>");
             resetFields();
         });