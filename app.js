// function createCar(make, model, year) {
//     return {
//         make: make,
//         model: model,
//         year: year,
//         getCarInfo: function() {
//             return Car: ${this.make} ${this.model}, Year: ${this.year};
//         }
//     };
// }

// const myCar = createCar("Toyota", "Camry", 2022);

// console.log(myCar.getCarInfo());






// function processOrder(orderNumber, callback) {
//     callback(orderNumber);
// }

// function orderProcessed(orderNumber) {
//     console.log(Order ${orderNumber} processed.);
// }

// processOrder(101, orderProcessed);

// processOrder(102, (orderNumber) => {
//     console.log(Order ${orderNumber} complete.);
// });








// function printCurrentDateTime() {
//     const currentDate = new Date();
//     console.log("Joriy sana va vaqt", currentDate.toLocaleString());
// }

// printCurrentDateTime();







// const company = {
//     name: 'TechCorp',
//     location: 'San Francisco',
// };

// console.log(company.ceo?.name);








// function filterItems(arr, predicate) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (predicate(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(filterItems(numbers, n => n > 3));







// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a, b) {
//         return a - b;
//     }
// };

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));