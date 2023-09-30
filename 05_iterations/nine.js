// Reduce

const myNums = [1,2,3,4];

const sum = myNums.reduce(function(acc,currVal){
    // console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc+currVal;
},0);

// console.log(sum);

// same by using the flat arrow function

const total = myNums.reduce((acc,currVal)=>(acc+currVal),0);

// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,currVal)=>(acc+currVal.price),0);

console.log(`The total price of the shopping cart is : ${totalPrice}`);