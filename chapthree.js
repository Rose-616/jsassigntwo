// Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
// "Apples."
fruits=["milk","bread","apple",];
// 2. Check your list length in the console.
console.log(fruits.length)
// 3. Update "Bread" to "Bananas."
fruits.splice(1,1,"banana");
// 4. Output your entire list to the console
console.log(fruits)

// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
let shoppinglist=[];
// 2. Add Milk, Bread, and Apples to your list.
shoppinglist.push("milk");
shoppinglist.push("bread");
shoppinglist.push("apple");
console.log(shoppinglist)
// 3. Update "Bread" with Bananas and Eggs
shoppinglist.splice(1,1,"bananas","eggs");
console.log(shoppinglist)
// 4. Remove the last item from the array and output it into the console.
console.log(shoppinglist.pop())
// 5. Sort the list alphabetically.
console.log(shoppinglist.sort())
// 6. Find and output the index value of Milk
let lenoflist=shoppinglist.length;
for (let i= 0; i=lenoflist; ) {
    if(i='milk'){
        console.log(i,"is found")
        break
    }
    else{
        console.log("not found")
    }
  }
//   7. After Bananas, add Carrots and Lettuce.
console.log(shoppinglist)
shoppinglist.splice(1,0,"carrots","lettuce");
console.log(shoppinglist)
// 8. Create a new list containing Juice and Pop.
let newlist=["juice","pop"];
// 9. Combine both lists, adding the new list twice to the end of the first list.
let addlist=newlist.concat(newlist);
let concatlist=shoppinglist.concat(addlist);
console.log(concatlist);
// 10. Get the last index value of Pop and output it to the console.
let lastindex=concatlist.lastIndexOf("pop")
console.log(lastindex)
// 11. Your final list should look like this:
console.log(concatlist)

// Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
let numlist=[1,2,3];
// 2. Nest the original array into a new array three times.
let newarry=[numlist,numlist,numlist];
console.log(newarry);
// 3. Output the value 2 from one of the arrays into the console.
console.log(newarry[0][1]);

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers
let mynewcar = { nickName: "rocket", 
make: "Toyota",
model: "Camry",
year: 2011, 
color: "blue",  
price:1500000,
forsale:false,
isautomatic:true
          };
// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.
let propertyname="color";
mynewcar[propertyname]="black";
console.log(mynewcar);
// 3. Use that same variable and assign a new property string value to it, such as 
// forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.
propertyname="forsale";
mynewcar[propertyname]=true;
console.log(mynewcar)
// 4. Output make and model into the console.
console.log(mynewcar.make);
console.log(mynewcar.model);
// 5. Output the value of forSale into the console
console.log(mynewcar.forsale);

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called 
// friends.
let people={
friends:[],
}
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
let firstfren={
    firstname:"hiba",
    lastname:"kamran",
    idvalue:1
}
let secfren={
    firstname:"zohra",
    lastname:"rizwan",
    idvalue:2
}
let thirdfren={
    firstname:"sharmeen",
    lastname:"saleem",
    idvalue:3
}
// 3. Add the three friends to the friend array.
people.friends.push(firstfren,secfren,thirdfren)
// 4. Output it to the console.
console.log(people)

// Chapter projects
// Manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
console.log(theList.shift())
console.log(theList)
console.log(theList.pop())
console.log(theList)
console.log(theList.splice(0,1,"FIRST"))
console.log(theList)
console.log(theList.splice(3,0,"Hello world"));
console.log(theList)
theList[3]="middle"
console.log(theList)
theList.push("LAST");
console.log(theList);

// Company product catalog
// 1. Create an array to hold an inventory of store items.
let storeinv=[
    
]
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
let itemone={
    name:"product 1",
    model:"a",
    cost:500,
    quantity:50
}
let itemtwo={
    name:"product 2",
    model:"b",
    cost:600,
    quantity:60
}
let itemthree={
    name:"product 3",
    model:"c",
    cost:700,
    quantity:70
}
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
storeinv[0]=itemone;
storeinv[1]=itemtwo;
storeinv[2]=itemthree;
console.log(storeinv)
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.
console.log(storeinv[2].quantity)

storeinv[1][0]="new product";
console.log(storeinv)

