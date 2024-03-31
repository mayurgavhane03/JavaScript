#include <iostream>
#include <vector>

using namespace std;

int findEquilibriumElement(vector<int>& arr) {
    int totalSum = 0;
    int leftSum = 0;

    // Calculate the total sum of all elements in the array
    for (int num : arr) {
        totalSum += num;
    }

    // Traverse the array and find the equilibrium element
    for (int i = 0; i < arr.size(); ++i) {
        // Subtract the current element from the total sum
        totalSum -= arr[i];

        // If the sum of elements to the left of the current element is equal
        // to the sum of elements to the right, return the current element
        if (leftSum == totalSum) {
            return arr[i];
        }

        // Add the current element to the left sum
        leftSum += arr[i];
    }

    // If no equilibrium element is found, return 0
    return 0;
}

int main() {
    // Test cases
    vector<int> arr1 = {1, 7, 5, 2, 6};
    cout << "Output for [1, 7, 5, 2, 6]: " << findEquilibriumElement(arr1) << endl; // Output: 5

    vector<int> arr2 = {10, 1, 1, 9};
    cout << "Output for [10, 1, 1, 9]: " << findEquilibriumElement(arr2) << endl; // Output: 1
    
    return 0;
}
