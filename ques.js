/* 1- create an array "food" that has the following values: "burger", "kabsa", "spaghetti", "pizza"  and save it inside the session storage and 
give it the key name "food". */

// write your code here
food=["burger", "kabsa", "spaghetti", "pizza"]
()


/* 2- create an object of objects called "cars" that has the keys: mercedes, toyota, ford. each of these will have the following object as value:
        country: a string representing the country of origin of the car
        models: an array of strings containing three models of the car
    then, save this object inside a the local storage.
 */

// write your code here


/* 3- create a function called getCar that takes string parameter "car" that will get the cars object from the database and print the following
using index 1 in the model array: "[car model] is made by [car] in [country]"  */

const getCar = function(car){
    
}


/* ex: getCar(ford) -> "the mustang is made by ford in america "  
       getCar(mercedes) -> "the E200 is made by mercedes in Germany"
*/

/* 4- create a function called addFood that takes a string "meal", that will add the meal string to the food array saved inside the session storage and then print the array with the new value added */

const addFood = function(meal){
      //--- write your code here ---\\
}

/* ex: 
addFood("shawarma") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma"] 
addFood("fried chicken") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma", "fried chicken"]
*/


/* 5- create a class dog that has name , species, and age of the dog
define a method makeSound that prints the name of the dog with word "woof"
*/

class Dog{
    constructor(name, species , age);
    name=this.name;
    species=this.species;
    age=this.age;
}
getdog(){
    return this.name,
    this.species,
    this.age
}
{

}
/* ex:
const dog1 = new Dog("Spike", "dobberman", 5)
dog1.makeSound() -> "Spike says woof!"
 */

/*life cycle methods
6- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
*/
import React, { Component } from 'react'

export default class ques extends Component {
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}

/*
events
7- create a functional react component that has a state "insideInput" and an input and make it change the "insideInput" state only when you press enter   
*/
import React, { Component } from 'react'

export default class ques extends Component {
    render() {
        return (
            <div>
               <input tybe="text">Input</input> 
            </div>
        )
    }
}

/*
fetch/axios
8- write a code that will make a request to 'https://jsonplaceholder.typicode.com/todos/1' and console log the title and completed keys from the response
*/
const url='https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then (data=>{return data.json()})
.then(res=>{console.log(res)})
.then(title=>{console.log(title)})