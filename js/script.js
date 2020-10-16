 function PizzaOrder(pizzaSizes, pizzaQuantity, pizzaCrust, pizzaTopping) {
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
     $("#size").val("");
     $("#quantity").val("");
     $("#crust").val("");
     $("#topping").val("");
 }
 $(document).ready(function () {
     $("#orderForm").submit(function (event) {
         event.preventDefault();
         var quantityOf = $("#quantity option:checked").val();
         var sizeOf = $("#size").find(":selected").text();
         var crustsOf = $("#crust").find(":selected").text();
         var toppingOf = $("#topping option:checked").val();
         //   console.log(quantityOf);

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
         $("#choices").last().append("<li>Size:" + sizeOf + "<li>",
             "<li>Quantity" + quantityOf + "<li>", "<li>Crust" + crustsOf + "<li>", "<li>Total Price" + order + "<li>");
     });
     resetFields();
 });