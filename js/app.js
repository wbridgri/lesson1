// single line comment 

/* 
Multi-
line comment


Five primitive data types:

Number => 2, 1.4333, -89
String => "Hello World" , "4" 'Hello World'
Boolean => true, false
undefined
null
 */

console.log(8 + 5);

/*

Number

Any numeric character that can be calculated

With number we can write expressions

+ => addition e.g. 8 + 5

- => subtraction e.g. 8 - 5

 * => multiplication 8 * 5

/ => division 8 / 5

** => exponentiation

% => Modulus 8 % 5

*/

console.log(8 -5);
console.log(8 * 5);
console.log( 8/ 5);
console.log(8 ** 5);
console.log( 8 % 5);
console.clear();


/* 

String


character text => any value/key on the keyboard

Strings are represented by quotation marks

Whitespace is included in the string




*/

console.log('Will Bridges');
console.log('8');
console.log(8);


/* 

Boolean

boolean => true or false

*/

console.log(false);
console.log(true);

// undefined
console.log(undefined);

// null

console.log(null);

/* 

Data storage => variables

var, let, const


syntax: 
    var varName = data;


naming rules and conventions

must not begin with a number or specual character, generally a lowercase letter

for multiple words, no spaces or hyphens, use camelCase or underscore


*/
console.clear();
var myName = 'Will';
console.log(myName);

var littleB = 'b';
var bigB = 'B';
console.log(littleB < bigB);

console.log(littleB.charCodeAt(0), bigB.charCodeAt(0));

var inventory;
inventory = 8;

console.log(inventory);

inventory = 12;

console.log(inventory);

inventory = inventory + 5;

console.clear();

var subtotal = 44.99;

var taxRate = 0.07;

var total = subtotal * (taxRate + 1)

console.log(total);

/* Temperature Converter 

Take a Temp in Fahrenheit (fah) and convert to Celsius (cel)

*/

var cel = 0;

fah = (1.8 * cel) + 32;

console.log(fah);

var fah = 0;

cel = (fah -32) / (1.8);

console.log(cel);

// Pseudocode => humanlike way of writing a program, not language specific

//Input => temperature in Fahrenheit
//Output => temperature in Celsius

/* 

SET fah
SET cel to (fah - 32) / (1.8)
RETURN cel


*/

var fah = 212;
var cel = (fah -32) / (1.8);

console.log(cel);

var aString = 'Whatever string you want to';

// how to find out how many characters are in a string? .length

console.log(aString.length);

//augmented arithmetic

inventory += 10;

console.log(inventory);

inventory -= 3;

var itemsToBeAdded = 20;

var itemsSold = 15;

console.log(inventory);

inventory -= itemsSold;

console.log(inventory);

