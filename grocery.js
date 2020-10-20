var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, unitPrice) {
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
    return Grocery;
}());
var groceryList = [new Grocery("Apple", 2, 1.34), new Grocery("Banana", 3, 2.25),
    new Grocery("Milk", 3, 3.56), new Grocery("Egg", 1, 1.55)];
function displayGroceryList(arr_names) {
    document.write("<tr><td>::Item List as Follow::</td></tr></br>");
    for (var i = 0; i < arr_names.length; i++) {
        document.write("<td>" + "Name:: " + groceryList[i].name + "|" + "</td></tr>");
        document.write("<td>" + "Quantity:: " + groceryList[i].quantity + "|" + "</td></tr>");
        document.write("<td>" + "UnitPrice:: " + groceryList[i].unitPrice + "</td></tr></br>");
    }
}
displayGroceryList(groceryList);
