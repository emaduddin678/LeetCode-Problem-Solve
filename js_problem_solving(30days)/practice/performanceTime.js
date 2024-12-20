// console.time()
// for(let i = 0; i< 100; i++){

// }
// console.timeLog()
// console.timeStamp("mark")
// // console.timeEnd()
// //
// //

// example 1
// const start = performance.now();

// for (let i = 0; i < 1_000_000; i++) {} // Simulate a task

// const end = performance.now();
// console.log(`Execution time: ${end - start} milliseconds`);

// example 2
// performance.mark("startTask");

// // Simulated task
// for (let i = 0; i < 1_000_000; i++) {}

// performance.mark("endTask");

// // Measure time between marks
// performance.measure("Task Duration", "startTask", "endTask");
// const measure = performance.getEntriesByName("Task Duration")[0];
// console.log(`Task duration: ${measure.duration} milliseconds`);

// Mark the start of a task
// performance.mark("hello");
// performance.mark("startTask");

// // Simulate a task (e.g., a loop or operation)
// for (let i = 0; i < 1_000_000; i++) {
//   // Simulated computation
// }

// // Mark the end of the task
// performance.mark("endTask");

// // Measure the duration between the two marks
// performance.measure("Task Duration", "startTask", "endTask");

// // Clear all marks and measures
// performance.clearMarks();
// performance.clearMeasures();
// // Retrieve all the marks
// const marks = performance.getEntriesByType("mark");
// console.log("Marks:", marks);

// const measure = performance.getEntriesByName("Task Duration")[0];
// // console.log(`Task duration: ${measure.duration} milliseconds`);

// // Retrieve all the measures
// const measures = performance.getEntriesByType("measure");
// console.log("Measures:", measures);
// // Clear all marks and measures
// performance.clearMarks();
// performance.clearMeasures();

const a = setTimeout(() => {
  console.log("Hello");
}, 4000);

setTimeout(() => {
  clearTimeout(a); 
}, 2000);
