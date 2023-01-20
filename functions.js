// --- FAV COLOR EXAMPLE ---
// a function is created just like a variable called favColor
// the function starts after the = sign with the open and closing normal brackets 
const favColor = () => {
    console.log("My fav color is Blue");
}
favColor();
// this is how we run the function by referencing the function name and adding normal 
// open and closing brackets at the end of the name

// --- COFFEE MACHINE EXAMPLE ---
// this function changes the value of the coffeeIsGrinding variable each time it's run
// the if statement checks the variable and logs something else depending on if it's true or false
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    // we can have as much code as we need in the function
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }

}
// run the function multiple times to see the logged message change each time it runs
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();

// --- CASH MACHINE EXAMPLE ---
let accNumber = 19382187;
const cashWithdrawl = (amount, accnum) => {
    console.log(`Withdrawing £${amount} from account ${accnum}`)
}
// when you run the function you can pass it different data each tmie whilst still re using 
// the same code inside the function. You can also run the same function as many times as you need
cashWithdrawl(10, accNumber);
cashWithdrawl(5, accNumber);
cashWithdrawl(20, 33112091);
cashWithdrawl(50, 42983759);

// --- MATHS EXAMPLE ---
// the return statement does the following:
// 1. exits the function at that line
// 2. stores a value on the line where you run the function
const addUp = (num1, num2) => {
    return num1 + num2;
}

// this does run the function and does store 10 in this line but we havent displayed it anywhere
addUp(7, 3); // 10
// this time we display it in the terminal by console logging the functiions value which is created using the return statement
console.log( addUp(5, 2) );

