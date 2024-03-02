#include <iostream>

void printCenteredTriangle(int n) {
    // Outer loop for number of rows
    for (int i = 0; i < n; ++i) {
        // Inner loop for leading spaces
        for (int j = 0; j < n - i - 1; ++j) {
            std::cout << " ";
        }
        // Inner loop for printing stars
        for (int j = 0; j <= i; ++j) {
            if(j==0){
                std::cout << "hi ";
            }
            std::cout << "* ";
        }
        std::cout << std::endl;
    }
}

int main() {
    int rows;
    std::cout << "Enter the number of rows for the centered triangle: ";
    std::cin >> rows;
    
    printCenteredTriangle(rows);
    
    return 0;
}
