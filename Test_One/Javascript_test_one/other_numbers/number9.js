// A program that defines the fibonacci sequence
function fibonacciSequence(limit) {
    let fibonacci = [0, 1]; //It starts with [0, 1], then iterates through
    
    for (let i = 2; i <= limit; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] > limit) break;
    }
    
    return fibonacci.slice(0, fibonacci.length - 1);
}

const limit = 100;
const fibonacciNumbers = fibonacciSequence(limit);

// printing the fibonacci numbers up to limit
console.log("Fibonacci numbers up to", limit, ":", fibonacciNumbers.join(", "));










