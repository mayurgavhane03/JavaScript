#include <iostream>
#include <climits>
using namespace std;

int findSecondMaxDifference(int arr[], int size) {
    if (size < 2) {
        return -1; // Invalid input, return -1
    }

    int maxDiff = INT_MIN;
    int secondMaxDiff = INT_MIN;

    for (int i = 0; i < size; ++i) {
        for (int j = i + 1; j < size; ++j) {
            int diff = arr[j] - arr[i];
            if (diff > maxDiff) {
                secondMaxDiff = maxDiff;
                maxDiff = diff;
            } else if (diff > secondMaxDiff && diff < maxDiff) {
                secondMaxDiff = diff;
            }
        }
    }

    return secondMaxDiff;
}

int main() {
    int arr[] = {14, 12, 70, 15, 95, 65, 22, 30};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = findSecondMaxDifference(arr, size);
    cout << "Second max difference: " << result << endl;

    return 0;
}
