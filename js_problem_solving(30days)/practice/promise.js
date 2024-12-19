const Task1 = (callback) => {
  console.log("Task 1");
  callback();
};
const Task2 = (callback) => {
  setTimeout(() => {
    console.log("Task 2");
    callback();
  }, 2000);
};
const Task3 = (callback) => {
  console.log("Task 3");

  callback();
};
const Task4 = (callback) => {
  console.log("Task 4");

  callback();
};
const Task5 = () => {
  console.log("Task 5");
};

// Task1(function () {
//   Task2(function () {
//     Task3(function () {
//       Task4(function () {
//         Task5();
//       });
//     });
//   });
// });

console.log("Start");

const promise = new Promise((resolve, reject) => {
  let a = true;
  if (!a) {
    resolve("Palestine will be free one day!!!");
  } else {
    reject("We will try again, In'Sha'Allah");
  }
});

console.log(promise);
promise
  .then((a) => {
    console.log(a);
  })
  .catch((a) => {
    console.log(a);
  });

console.log("End");
