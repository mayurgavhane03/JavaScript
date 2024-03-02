#include <iostream>
#include <cmath>

// Function to check if a number is a perfect square
bool isPerfectSquare(int x) {
    int s = sqrt(x);
    return s * s == x;
}

// Function to check if a number is a Fibonacci number
bool isFibonacci(int n) {
    // A number is a Fibonacci number if and only if one or both of (5*n^2 + 4) or (5*n^2 - 4) is a perfect square
  
   return isPerfectSquare((5 * n * n) + 4) || isPerfectSquare((5 * n * n) - 4);

}

// Function to calculate the sum of even Fibonacci numbers less than a given number
int sumOfEvenFibonacci(int n) {
    int a = 0, b = 1, c = a + b, sum = 0;

    // Iterate through the Fibonacci sequence and sum even numbers less than n
    while (c < n) {
        if (c % 2 == 0) {
            sum += c;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return sum;
}

// Function to process the input number
void fibonacciOrSumEven(int num) {
    if (isFibonacci(num)) {
        std::cout << "The number " << num << " is a Fibonacci number." << std::endl;
    } else {
        int sum = sumOfEvenFibonacci(num);
        std::cout << "Sum of all even Fibonacci numbers less than " << num << " is: " << sum << std::endl;
    }
}

int main() {
    // Example usage
    fibonacciOrSumEven(2);
    fibonacciOrSumEven(6);
    fibonacciOrSumEven(21);

    return 0;
}
