#include <bits/stdc++.h>

using namespace std;

int main() {
    
    vector<int> arr = {1, 2, 3, 4, 5, 6, 8, 5, 8, 2, 4, 5};
    int largest = arr[0];
    int secondLargest = arr[0];
    
    for(int i = 1; i < arr.size(); i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    
    cout << secondLargest;
    
    return 0;
}
