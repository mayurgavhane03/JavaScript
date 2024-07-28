#include <bits/stdc++.h>
using namespace std;

void maxmin(const vector<int>& arr, int low, int high, int& max, int& min) {
    if (low == high) { // Correct condition for single element
        if (arr[low] > max) {
            max = arr[low];
        }
        if (arr[low] < min) {
            min = arr[low];
        }
        return;
    }

    if (high == low + 1) { // Correct condition for two elements
        if (arr[low] < arr[high]) {
            if (arr[high] > max) {
                max = arr[high];
            }
            if (arr[low] < min) {
                min = arr[low];
            }
        } else {
            if (arr[low] > max) {
                max = arr[low];
            }
            if (arr[high] < min) {
                min = arr[high];
            }
        }
        return;
    }

    int mid = low + (high - low) / 2;
    int max1 = INT_MIN, min1 = INT_MAX;

    maxmin(arr, low, mid, max, min);
    maxmin(arr, mid + 1, high, max1, min1);

    if (max1 > max) {
        max = max1;
    }
    if (min1 < min) {
        min = min1;
    }
}

int main() {
    vector<int> arr = {3, 5, 1, 8, 9, 2, 7, 6, 4};
    int max = INT_MIN;
    int min = INT_MAX;

    maxmin(arr, 0, arr.size() - 1, max, min);
    cout << "Maximum value: " << max << endl;
    cout << "Minimum value: " << min << endl;

    return 0;
}
