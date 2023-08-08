const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    } else if (n === 0) {
        return 0; 
    }
    let firstPrev = 1;
    let secondPrev = 0;
    for (let i = 2; i <= n; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci(1);
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
