// console.log("Hello World")

// let prod1 = {
//     prodName : "Lenovo LQ",
//     price : 65990,
//     rating : 5,
//     discount : 43,
//     buyOption : false
// }

// let message = `Our product ${prod1.prodName} has a discount of ${prod1.discount}%`;
// console.log(message);

// let str = "Part\nhib";
// console.log(str);

// let array = [];
// for(i =0; i<100; i++){
//     array[i] = i+1;
// }

// for(number of array){
//     if(number%2==0)
//         console.log(number);
//     else
//         continue;
// }

// const gameNumber = Math.random() * 20;
// let number = Math.floor(gameNumber);
// console.log(number);

// let guess = prompt("Enter your number: ")
// while(1){

//     if(guess == number){
//         alert("It's same");
//         break;
//     }

//     else{
//         guess = prompt("Try again: ");
//     }
// }

// let userInput = prompt("Enter your full name: ");
// const str1 = "@";
// const str3 = userInput.length;
// var output = str1.concat(userInput).concat(str3);
// console.log(output);

// const prices = [250,645,300,900,50];

// function formula(price,discount){
//     let subAmount = (discount*price)/100;
//     let result = price - subAmount;
//     return result;
// }

// for(price of prices){
//     price = formula(price,10);
//     console.log(price);
// }

// const companies = ['bloomberg', 'microsoft', 'uber', 'google,', 'ibm', 'netflix']
// console.log(companies);

// companies.shift();
// console.log(companies);

// companies.splice(1,1,'ola');
// console.log(companies);

// companies.push('amazon');
// console.log(companies);

// function vowelWords(str){
//     let count=0;
//     for(const c of str){
//         if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
//             count++;
//     }
//     return count;
// }

// const vowelWords = (str) => {
//     let count=0;
//     for(const c of str){
//         if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
//             count++;
//         }
//      return count;
// }

// let message = prompt("Your word: ");
// var result = vowelWords(message);
// console.log(`The number of vowels is ${result}`);


// const numbers = [4, 9, 11, 17, 7];
// numbers.forEach((val) => {
//     console.log(val**2);
// })

// const marks = [85, 87, 90 ,95, 67, 99, 78, 92];
// let arr1 = marks.filter((mark) => {
//     return mark>90;
// })
// console.log(marks);
// console.log(arr1);

let number = prompt("Enter a number: ");
let arr1=[];

for(i=0;i<number;i++){
    arr1[i] = i+1;
}
console.log(arr1);
let res1 = arr1.reduce((prev,curr) => {
    return prev+curr;
})

let res2 = arr1.reduce((prev,curr) => {
    return prev*curr;
})
console.log(`The sum upto ${number} is ${res1}`)
console.log(`The sum upto ${number} is ${res2}`)