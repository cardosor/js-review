/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let myVar;

// 2.) Change the value of this variable
myVar = 'Hello';

// 3.) Change the data type of this variable
myVar = 1 //Change my var from string to number

// 4.) Create another variable and the one from above to concatenate
let myVar2 = "World"; //declare new variable and assgin a value
console.log(myVar + myVar2); // using the + for string concatenation
// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`Hello ${myVar2}`); //using backtick and ${} for string interpolation

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let myName = "Sabrina";
console.log(myName.charAt(4)); // return the letter 5th place in string Sabrina

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

//Define Unicode: Unicode is a universal character encoding standard. It defines the way individual characters are represented in text files, web pages, and other types of documents.
console.log("Teddy".charCodeAt(2)); // return the value in UTF-16 format

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(72, 101, 108, 108, 111)); //Translate UTF-16 code to Ascii Character.

// Take your first and last name and concat()
console.log("Rafael ".concat("Cardoso"));

// Create a string and make it return true using startsWith()
let myString = "Rafael";
console.log(myString.startsWith("R"));

// Now use any variable with endsWith() and return false
const mySting2 = "Cardoso";
console.log(mySting2.endsWith("o"));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ' + "and said: 'amazing'";
console.log(ozgur.includes("said")); // returns true as said is in the string.

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow')); //The index of cow is 149

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(vanessa.lastIndexOf("Vanessa")); // Vanessa last index is 39

//we laserbeam the alien Vanessa, bonus points. Last index of Vanessa removed.
console.log(vanessa.substring(0, vanessa.lastIndexOf('Vanessa')-1) + vanessa.substring(vanessa.lastIndexOf('Vanessa')+7));



// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length); //The string length is 30


// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

const newReplaceGokuWithVegeta = replaceGokuWithVegeta.replace('Goku', 'Vegeta');
console.log(newReplaceGokuWithVegeta); // Goky is now replaced with Vegeta

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search("WiFeY 3")); //The right 'wifey' is at index 18

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7));

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,5));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
//used repalce to remove the and and regular expression to remove the ", " and used split to return an array.
console.log(splitTheBill.replace("and ", "").replace(/[,]\s/g," ").split(" "));

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
//Used replace with regular expression to remove "and " and also to remove ", " then split to return a array but this time each character.
console.log(splitTheBill.replace(/and /, "").replace(/[,]\s/g,"").split(''));

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase());

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const angryTuan = "I DO NOT LIKE YOU! @#$%$##";
console.log(angryTuan.toLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4)); //substring starts at 1 which is char 'e' and ends at 4 which is char 'o', is does not include the last char.

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0, 10));

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(aslDays.search('aol')));//using search we did not have to count each char.

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let varTrim = "        this is a newstring       ";
console.log(varTrim.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a _ b)
console.log(a < b)
// console.log(c _ b)
console.log(c > b)
// console.log(d _ d)
console.log(d === d)
// console.log(d _ a)
console.log(d !== a)
// console.log(a _ 15)
console.log(a < 15)
// console.log(a _ b _ c)
console.log(a + b === c)
//console.log(c _ b _ a _ d)
console.log(c > b === a !== d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
//created the for loop to count from 0  to 9
for(let i=0; i<10;i++)
{
  //priting the value of i using string interpolation with a string.
  console.log(`${i} I am having a headache`);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
//created the for loop to count from 0  to 19
for(let i=0; i<20;i++)
{
  //priting the value of i using string interpolation with a string.
  console.log(`${i} Spinning`);
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
//declare a counter value to keep track of how many times the loop runs
let counter = 0;
while(counter<20){
  //incressing the counter before printing the string, so it print from 1 to 20
  counter++;
  //priting the value of counter using string interpolation with a string.
  console.log(`${counter} I am sorry.`);
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties. 

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. 

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }



// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}

//Using for in to print each property
for(const property in whateverQueenBeySaid){
  console.log(`${property}`);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
//using for in to print each index
for(const index in lana){
  console.log(`${index}`);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
//using for of to print each element in an array
for (const element of tia) {
  console.log(element);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
//For each expects a function
perscholas.forEach(function (person){
  //declaring the variable and Assagined a value to it
  const stringPS = "PS";
  //printing the current person and concatenating with the value of stringPS
  console.log(person + stringPS);
});

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array. 
// pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 
// unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. 
// shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. 
// concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
// splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 
// slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 
// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation. 
// includes()
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
// indexOf()
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
// length
//The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(" "));

//different way of doing it
// let newStringArray = fruits.toString();
// newStringArray = newStringArray.replaceAll(","," ");
// console.log(newStringArray);

// Remove orange
fruits.pop();
console.log(fruits);


// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry", "Kiwi", "grapes");
console.log(fruits);

// Remove apple
fruits.shift();
console.log(fruits);
// Add mango at the beginning of the array
fruits.unshift("mango");
console.log(fruits);
// Add lemon, and grapefruit between mango and banana
//Used the indexOf method to find the index of banana, then added the new elements starting from that index.
fruits.splice(fruits.indexOf('banana'),0,"lemon", "grapefruit");
console.log(fruits);
// Remove banana and strawberry
fruits.splice(fruits.indexOf('banana'),2);
console.log(fruits);
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['Jackfruit', 'Starfruit', 'Dragonfruit'];
const newFruitList = fruits.concat(exoticFruits);
console.log(newFruitList);


// Print the last two exotic fruits without altering the newly concatenated array.
console.log(newFruitList[newFruitList.length-2], newFruitList[newFruitList.length-1]);

//Different way to print the last two exotic fruits
console.log(newFruitList.slice(-2).toString().replace(",", " "))

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort();
console.log(monalissaIsMessy);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse();
console.log(mirrorMirrorOnTheWall);

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
//Had to create an array from the string above as string does not have the filter method
//Created a new variable and assigned the array returned from split method
const arr1 = RafaelNoBadWords.split(" ");
//Used the filter method to remove the bad words and join to make it a string.
console.log(arr1.filter( arr1 => arr1.indexOf("badword")).join(" "));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
//reduce expects a function, the acc argument is an accumulator, and current number it the current array element. It will loop each element in the array and add to the accumulator.
const totalAdd = numbersToAddUp.reduce((acc, currentNum) => acc + currentNum);
console.log(totalAdd);

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const spreadArr01 = [1,2,3,4,5,6,7,8,9];
const spreadArrayCopy = [...spreadArr01]
console.log(spreadArrayCopy);

// Spred operator creates a shallow copy of an array. Meaning you can make changes to shallow copy without chaging the original array.


// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arryOriginal01 = [22,55,88];
const arrayCopy01 = ["Hello", "World"];
let connectedArrays = [...arryOriginal01, ...arrayCopy01];
console.log(connectedArrays);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
//Had to change the connectedArrays variable to mutable with let, with constant it would not let us assign it a new array with the last_element to it.
connectedArrays = [...connectedArrays, "last_element"]
console.log(connectedArrays);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
connectedArrays = ["fisrt elemnet",...connectedArrays]
console.log(connectedArrays);

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [['flavor of the week']], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!
console.log(donutShop[1][0][1]);
console.log(donutShop[2][0][0][1][0]);
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
const teo = "person";

if(teo === 'person'){
  console.log('Teo is a person!');
}else{
  console.log('Teo is not a person!');
}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
const gender = "male";
if(teo === 'person'){
  console.log('Teo is a person!');
  if(gender === "male"){
    console.log('You got it right!');
  }else if(gender === "female"){
    console.log('Wrong. Teo is going to remove you from the class.');
  }
}else{
  console.log('Teo is not a person!');
}
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
const isHungry = true;
if(teo === 'person'){
  console.log('Teo is a person!');
  if(gender === "male"){
    console.log('You got it right!');
    if(isHungry === true){
      console.log('Let\'s buy Teo some tacos!');
    }else if(isHungry === false){
      console.log('He doesn\'t need to eat.');
    }else{
      console.log('If Teo is not hungry, am I hungry?');
    }
  }else if(gender === "female"){
    console.log('Wrong. Teo is going to remove you from the class.');
  }
}else{
  console.log('Teo is not a person!');
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

const isGustavoTheCoolest = true;
isGustavoTheCoolest ? console.log('You got that right!') : console.log('James wants to argue. He says he\'s the best!');

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting(){
  console.log('Hello, ma\'amsir!');
}
sayGreeting();
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function printString(STRING){
  console.log(`This is my ${STRING}`);
}
printString('Don\'t play with me haha');

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(num1, num2, num3){
  console.log(num1 + num2 + num3);
}
let x = 1;
let y = 2;
let z = 3;
add(x,y,z);

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name){
  if(name === "Teo"){
    return '1st rule: You do not talk about Fight Club.';
  }else if(name === "Manara"){
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
  }else if(name === "Liv"){
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
  }else if(name == 'Devin'){
    return '4th rule: Only two guys to a fight.';
  }else{
    return 'No shirts';
  }
}
console.log(fightClub('Teo'));
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello(){
  console.log('Hello');
  return function () {console.log('Goodbye');}
}
hello()();

// Create a function expression with your first name as the variable and then print your first and last name
const rafael = function(){
  console.log('Rafael Cardoso');
}
rafael();

// Create an arrow function that accepts a number and have it return that number doubled
const doubleNum = (num) => num*2
console.log(doubleNum(2));

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: 'Rafael',
  age: '40',
  location: 'Lowell'
}

// Access the name using dot notation
console.log(human.name);

// Access the age using square brackets
console.log(human['age'])

// Use object destructuring to access location
const {name, age, location} = human;
console.log(location);

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability);

// Print cut
console.log(bulbasaur.moves[bulbasaur.moves.indexOf('cut')]);

// Print Bulbahhhh!!!!!
bulbasaur.sound();

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
console.log(bulbasaur.height);

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;
console.log(bulbasaur.order);

// Print an array that contains every single properties in bulbasaur
//Declare and ini a empty array.
let bulbasaurPropertiesArr = [];
//loop the bulbasaur obj properties
for(properties in bulbasaur){
  //add the current property in the array
  bulbasaurPropertiesArr.push(properties);
}
//Print the array.
console.log(bulbasaurPropertiesArr);

// Print every single properties one by one in the console
for(properties in bulbasaur){
  console.log(properties);
}
// Print an array that contains every single values in bulbasaur
//Declare and ini a empty array.
let bulbasaurValuesArr = [];
//loop the bulbasaur obj properties
for(properties in bulbasaur){
  //add the current value in the array
  bulbasaurValuesArr.push(bulbasaur[properties]);
}
//Print the array.
console.log(bulbasaurValuesArr);