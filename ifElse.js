let orderCount = 0;

const takeOrder = (topping) => {
    console.log(orderCount);
    console.log(`Pizza with ${topping}`);
    orderCount++;
} 

takeOrder("pineapple");
takeOrder("pineapple");
takeOrder("pineapple");
takeOrder("pineapple");