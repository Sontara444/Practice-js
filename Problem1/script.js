// Coding challenge #1: Print numbers from 1 to 10

// for(let i = 1; i < 11 ; i++){
//     console.log(i)
// }
// Coding challenge #2: Print the odd numbers less than 100

// for(let i = 1; i <= 100; i += 2){
//     console.log(i)
// }

// Coding challenge #3: Print the multiplication table with 7

// for( let i = 7; i <= 70; i +=7){
//     console.log(i)
// 
  
// for(let i = 1; i<=10; i++){
//     let row = "7 * " + i + " = "  + 7 * i;
//     console.log(row)
// }

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for(let i = 1; i<=10; i++){
    table(i);
    // console.log("")
}

function table(n){
    for(let i = 1; i<=10; i++){
        let row = n + " * " + i + " = " + n * i;
        // console.log(row)
    }
}

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sum = 0;

for(let i=1; i<=10; i++){
    sum += i;
    // console.log(sum);
}

// Coding challenge #6: Calculate 10!

let prod = 1;

for(let i = 1; i <= 10; i++)
{
    prod *= i;
}
// console.log(prod);



// // Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

// let sums = 0;

// for(let i=11; i<=30; i += 2){
//     sums += i
    
// }
// console.log(sums);
// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sums = 0;

for(let i=11; i<=30; i += 2){
    sums += i
    
}
console.log(sums);



























