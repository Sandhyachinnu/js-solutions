// // Problem: 1

// // Write a function called “addFive".
// // Given a number, “addFive" returns 5 added to that number.
let num=10;
function addFive(num){
   return num+5;
}
let result1=addFive(num)
console.log(result1);

// // Problem:2

// // Write a function called “getOpposite".
// // Given a number, return its opposite
let num1=7;
function getOpposite(num1) 
{
if (typeof num1 === 'number')
 { 
    return -num1; 
 } 
else 
{ 
    return -1; 
}
}
let result = getOpposite(num1)
console.log(result);

// // Problem:3

// // Fill in your code that takes an number minutes and converts it to seconds.
let min = 5;
function toSeconds(min) {
    return min*60;
}
let secs= toSeconds(min)
console.log(secs);

// // Problem:4

// // Create a function that takes a string and returns it as an integer
let mystr = "5";
function toInteger(mystr) 
{
if(typeof mystr==="String")
{
    return mystr;
}
else{
   return Number(mystr); 
}
}
let string=toInteger(mystr)
console.log(string);

// // Problem:5

// // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
let n=2;
function incr(n){
    return n+1;
}
let res=incr(n)
console.log(res);

// // Problem:6

// // Create a function that takes an array and returns the first element.
let arr=[2,8,7,9];
function array(arr){
    return arr[0];
}
let first=array(arr)
console.log(first);

// // Problem:7

// // Convert Hours into Seconds

// // Write a function that converts hours into seconds.
let hours=4;
function hourstosec(hours){
    return hours*3600;
}
let sec=hourstosec(hours)
console.log(sec);

// // Problem:8

// // Find the Perimeter of a Rectangle
// // Create a function that takes height and width and finds the perimeter of a rectangle.
let height=24,width=16;
function perimeter(height,width){
    return (height+width)*2;
}
let peri=perimeter(height,width)
console.log(peri);

// // Problem:9

// // Less Than 100?
// // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
let a=10,b=25;
function sum(a,b){
    let res=a+b;
    if (res<100){
        return true;
    }
    else{
        return false;
    }
}
let final=sum(a,b)
console.log(final);


// // Problem:10

// // There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// // Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function division(n1,n2){
    return n1%n2;
}
let rem=division(5,3);
console.log(rem);

// // Problem:11

// // Old macdonald had a farm:
// // MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// // turkey = 2 legs
// // horse = 4 legs
// // pigs = 4 legs
// // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function totallegs(t,h,p){
    return t*2+h*4+p*4;
}
let total=totallegs(2,4,4)
console.log(total);

// // Problem:12

// // Frames Per Second
// // Create a function that returns the number of frames shown in a given number of minutes for a certain FPS
function calculateFrames(minutes, fps) {
    const seconds = minutes * 60;  // Convert minutes to seconds
    const frames = seconds * fps;  // Multiply seconds by frames per second
    return frames;
}

// // Problem:13

// // Check if an Integer is Divisible By Five
// // Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleby5(num){
    let res=num%5;
    if(res==0){
        return true;
    }
    else{
        return false;
    }
}
let Division=divisibleby5(63)
console.log(Division);

// // Problem :14

// // Write a function called “isEven".
// // Given a number, “isEven" returns whether it is even.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false

// // Problem:15

// // Write a function called “areBothOdd".
// // Given 2 numbers, “areBothOdd" returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
    return num1 % 2 !== 0 && num2 % 2 !== 0;
}
console.log(areBothOdd(3, 5));  // Output: true
console.log(areBothOdd(3, 4));  // Output: false

// // Problem:16
// // Write a function called “getFullName".
// // Given a first and a last name, “getFullName" returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName("John", "Doe"));  // Output: "John Doe"
console.log(getFullName("Jane", "Smith"));  // Output: "Jane Smith"

// // Problem:17

// // Write a function called “getLengthOfWord".
// // Given a word, “getLengthOfWord" returns the length of the given word.

function getLengthOfWord(str){
      return str.length;
}
console.log(getLengthOfWord("Example"));
console.log(getLengthOfWord(""));

// // Problem:18

// // Write a function called “isSameLength".
// // Given two words, “isSameLength" returns whether the given words have the same length.

function isSameLength(word1, word2) {
    return word1.length === word2.length;
}
console.log(isSameLength("hello", "world"));  // Output: true
console.log(isSameLength("apple", "banana"));  // Output: false


// // Problem:20

// // Write a function called “getNthElement".
// // Given an array and an integer, “getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array, n) {
    if (array.length === 0) {
        return undefined;
    }
    return array[n];
}
console.log(getNthElement([1, 2, 3, 4], 2));  // Output: 3
console.log(getNthElement([], 1));  // Output: undefined



// // Problem:21

// // Write a function called “getLastElement".
// // Given an array, “getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(arr){
    if(arr.length==0){
        console.log("Undefined");
    }
        return arr[arr.length-1];
    }
console.log(getLastElement([9,5,8,2,12,75]));

// // Problem:22

// // Write a function called “getProperty".
// // Given an object and a key, “getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : undefined;
}

// Example usage:
const person = {
    name: "John",
    age: 30
};

console.log(getProperty(person, "name"));  // Output: "John"
console.log(getProperty(person, "height"));  // Output: undefined


// // Problem:24

// // Write a function called “removeProperty".
// // Given an object and a key, “removeProperty" removes the given key from the given object.

function removeProperty(obj, key) {
        delete obj[key];
}
let obj={
    name:'John',
    Address:'USA',
    Age:24,

}
removeProperty(obj,"Age");
console.log(obj);

// // Problem:25

// // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

function countPositivesSumNegatives(arr) {
    // Initialize count for positive numbers and sum for negative numbers
    let countPositive = 0;
    let sumNegative = 0;
    
    // Iterate through the array
    for (let num of arr) {
        if (num > 0) {
            // Increment count if number is positive
            countPositive++;
        } else if (num < 0) {
            // Add to sum if number is negative
            sumNegative += num;
        }
    }
    // Return the result array
    return [countPositive, sumNegative];
}
console.log(countPositivesSumNegatives([2,-9,8,1,-3,-9,2,10]));

// // Problem:26

// // Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositiveNumbers(numbers) {
    return numbers.filter(num => num > 0);
}
console.log(getPositiveNumbers([-5, 3, 0, -1, 8, 10]));  // Output: [3, 8, 10]
console.log(getPositiveNumbers([-2, -4, -6]));  // Output: []


// // Problem:27

// // Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent)
function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);  // Calculate 2 to the power of i
    }
    return result;
}
console.log(powersOfTwo(5));  // Output: [1, 2, 4, 8, 16, 32]
console.log(powersOfTwo(3));  // Output: [1, 2, 4, 8]


// // Problem:28

// // Find the maximum number in an array of numbers
function getMaxNumber(numbers) {
    return Math.max(...numbers);
}
console.log(getMaxNumber([3, 5, 9, 1, 6]));  // Output: 9
console.log(getMaxNumber([-10, -3, -50, -1]));  // Output: -1


// Problem:29

// Print the first 100 prime numbers
// printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
let number = 0;
let i = 2;

while(number < nPrimes)
{
if (isPrime(i))
{
console.log(number, " → ", i);
number++;
}
i++;
}
}
// Returns true if a number is prime
function isPrime(number)
{
if(number<=1)
    return false;
if(number<=3)
    return true;
if(number%2===0 || number%3==0)
    return false;
for(let i=5;i*i<=number;i+=6){
    if(number%i===0 || number%(i+2)===0)
        return false;
}
return true;
}
printPrimes(100);

// Problem:30

// Create a function that will return in an array the first “nPrimes" prime numbers greater than a particular number “startAt"
// console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
    const primes = [];
    let num = startAt + 1; // Start checking from the next number

    while (primes.length < nPrimes) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

// Returns true if a number is prime
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n <= 3) return true; // 2 and 3 are prime numbers
    if (n % 2 === 0 || n % 3 === 0) return false; // Exclude multiples of 2 and 3

    // Check for factors from 5 to √n
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
} 
// Example usage
console.log(getPrimes(10, 100)); // Output: The first 10 primes greater than 100


// Problem:31

// Reverse a string
// let s = reverseString("JavaScript");
// console.log(s);
function reverseString(str)
{
  let reverse_str='';
  for(let i=str.length-1;i>=0;i--){
    reverse_str += str[i];
  }
  return reverse_str;
}
const s="Javascript";
const reverse=reverseString(s);
console.log(reverse);


// Problem:32

// Create a function that will merge two arrays and return the result as a new array
// let ar1 = [1, 2, 3];
// let ar1 = [1, 2, 3];
// let ar = mergeArrays(ar1, ar2);
// console.log(ar);
function mergeArrays(arr1, arr2)
{
    return arr1.concat(arr2);
}
let ar1 = [1, 2, 3];
let ar2 = [5, 6, 7];
let ar= mergeArrays(ar1,ar2);
console.log(ar)

// Problem:33

// Calculate the sum of numbers received in a comma delimited string
// console.log(sumCSV(“1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(e)
{
        const numbers = e.split(',').map(num => parseFloat(num.trim()));
        let sum = 0;
    
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    
        return sum;
}
let sumcsv=sumCSV(("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
console.log(sumcsv);










