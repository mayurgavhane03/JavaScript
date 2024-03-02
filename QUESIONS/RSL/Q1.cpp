#include <iostream>
#include <utility> // For std::pair
#include <cmath>

bool prime(int num) {
    if (num < 2) {
        return false;
    }
    for (int i = 2; i <= sqrt(num); ++i) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

std::pair<int, int> closest_primes(int n) {
    int smaller_prime = 0;
    int larger_prime = 0;

    int i = n - 1;
    while (true) {
        if (prime(i) && smaller_prime == 0) {
            smaller_prime = i;
        }
        if (prime(n) && larger_prime == 0) {
            larger_prime = n;
        }
        if (smaller_prime != 0 && larger_prime != 0) {
            break;
        }
        --i;
        ++n;
    }

    return std::make_pair(smaller_prime, larger_prime); //make pair is used to create pair object
    
}

int main() {
    int num = 31;

    std::pair<int, int> primes = closest_primes(num);

    std::cout << "Output: ";
    if (primes.first == primes.second) {
        std::cout << primes.first;
    } else {
        std::cout << primes.first << " " << primes.second;
    }
    std::cout << std::endl;

    return 0;
}
