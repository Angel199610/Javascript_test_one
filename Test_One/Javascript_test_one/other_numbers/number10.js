function computeSum(a, b) {
    let sum = a + b;
    if (a === b) {
        return 3 * sum;
    } else {
        return sum;
    }
}

// Test with two similar numbers
const num1 = 5;
const num2 = 5;
const result1 = computeSum(num1, num2);
console.log("Numbers:", num1, "and", num2, "Sum:", result1);

// Testing with different numbers
const num3 = 4;
const num4 = 7;
const result2 = computeSum(num3, num4);
console.log("Numbers:", num3, "and", num4, "Sum:", result2);

