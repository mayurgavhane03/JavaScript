#include <iostream>
#include <cmath>

bool isPrime(int n){
    if(n<=0) return false;
    if(n==2) return false;
    if(n%2 == 0) return false;
    for(int i=3; i<n; i++){

    }
}

int nearestPrime(int num) {
    if (isPrime(num))
        return num;
    
    int smaller = num - 1;
    int larger = num + 1;

    while (true)
    {
        if(isPrime(smaller)){
            return smaller;
        }
        if(isPrime(larger)){
            return larger;
        }
        smaller--;
         larger++;
       
    }
    
}

int main() {
    int input;
    std::cout << "Enter an integer: ";
    std::cin >> input;
    int nearest = nearestPrime(input);
    std::cout << "Nearest prime number: " << nearest << std::endl;
    return 0;
}
