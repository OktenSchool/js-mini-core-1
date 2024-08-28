// function foobar(title, text) {
//     document.write(`<div>
//                     <h2>${title}</h2>
//                     <p>${text}</p>
//                </div>`);
// }
//
// foobar('asd', 'qweqweqwe');
// foobar('hello', 'okten is cool');
// foobar('igewugwhgfsjhds', 'kadshsjh akdh kajd akj h');


// function square(sideANum, sideBNum) {
//     let result = sideANum * sideBNum;
//     console.log(result);
//     return result;
// }
//
//
// let room1 = square(10, 20); // 200
// let room2 = square(10, 12);
//
// let resSquare = room1 + room2;
// console.log(resSquare);


// let user1 = {id: 1, name: 'vasya'};
// let user2 = {id: 2, name: 'kokos'};

// function userBuilder(userId, userName) {
//     let user = {id: userId, name: userName};
//     return user;
// }
//
// let user1 = userBuilder(1, 'vasya');
// console.log(user1);
// let user2 = userBuilder(2, 'anton');
// console.log(user2);
// let user3 = userBuilder(3, 'kokos');
// console.log(user3);
//
// let userBuilder1 = userBuilder(123, 'eigjhgf');
// console.log(userBuilder1);


// let functions = [
//
//     function square(sideANum, sideBNum) {
//         return sideANum * sideBNum;
//     },
//     function perimetr(sideANum, sideBNum) {
//         return (sideANum + sideBNum) * 2;
//     },
//     function calculateSomething(a, b, c) {
//         return a + b + c;
//     }
//
// ]
// functions[0]();

// let functionsObj = {
//     square: function (sideANum, sideBNum) {
//         return sideANum * sideBNum;
//     },
//     perimetr: function (sideANum, sideBNum) {
//         return (sideANum + sideBNum) * 2;
//     },
//     calculateSomething:function (a, b, c) {
//         return a + b + c;
//     }
// }
//
//
// let square = functionsObj.square(10, 20);
// console.log(square);


// let functionsObj = {
//     square: (sideANum, sideBNum) => {
//         return sideANum * sideBNum;
//     },
//     perimetr: (sideANum, sideBNum) => {
//         return (sideANum + sideBNum) * 2;
//     },
//     calculateSomething: (a, b, c) => {
//         return a + b + c;
//     }
// }
//
// let asd = (a, b) => {
//     return a + b;
// }
