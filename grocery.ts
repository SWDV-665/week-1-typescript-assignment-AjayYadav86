class Grocery {
  name: string;
  quantity : number;
  unitPrice: number;
  
  constructor(name: string, quantity: number, unitPrice: number) {
    this.name = name;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}

let groceryList: Grocery[] = [new Grocery("Apple",2,1.34),new Grocery("Banana",3,2.25),
                              new Grocery("Milk",3,3.56),new Grocery("Egg",1,1.55)];


function displayGroceryList(arr_names:Grocery[]) {
       document.write("<tr><td>::Item List as Follow::</td></tr></br>");
   for(var i = 0;i<arr_names.length;i++) { 
       document.write("<td>"+ "Name:: " + groceryList[i].name +"|" + "</td></tr>");
       document.write("<td>"+ "Quantity:: "+groceryList[i].quantity + "|"+ "</td></tr>");
       document.write("<td>"+ "UnitPrice:: "+groceryList[i].unitPrice +"</td></tr></br>");
   }  
} 

displayGroceryList(groceryList);
