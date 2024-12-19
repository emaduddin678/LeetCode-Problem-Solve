// A closure is formed when a function "remembers" the variables in its lexical scope, even after the outer function has finished execution.

function add(x) {
  return 10 + x;
}

const memo = (fn) => {
  let cache = {};

  return function (x) {
    if (cache[x]) {
      console.log(cache, "if");
      console.log("result from cache.");
      return cache[x];
    } else {
      console.log(cache, "else");
      console.log("calcualtion result from fn function");
      const result = fn(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);

console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(10));
