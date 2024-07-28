#include <iostream>
#include <vector>
using namespace std;

void Merge(vector<int>& a, int low, int mid, int high, vector<int>& sortedArr) {
    int i = low;
    int j = mid + 1;
    int k = low;

    while (i <= mid && j <= high) {
        if (a[i] <= a[j]) {
            sortedArr[k] = a[i];
            i++;
        } else {
            sortedArr[k] = a[j];
            j++;
        }
        k++;
    }

    while (i <= mid) {
        sortedArr[k] = a[i];
        i++;
        k++;
    }

    while (j <= high) {
        sortedArr[k] = a[j];
        j++;
        k++;
    }

    for (int l = low; l <= high; l++) {
        a[l] = sortedArr[l];
    }
}

void mergeSort(vector<int>& arr, int low, int high, vector<int>& sortedArr) {
    if (low < high) {
        int mid = (low + high) / 2;

        mergeSort(arr, low, mid, sortedArr);
        mergeSort(arr, mid + 1, high, sortedArr);

        Merge(arr, low, mid, high, sortedArr);
    }
}

vector<int> SortArr(vector<int> arr) {
    int low = 0;
    int high = arr.size() - 1;
    vector<int> sortedArr(arr.size());
    mergeSort(arr, low, high, sortedArr);

    return arr;
}

int main() {
    vector<int> arr = {1, 2, 5, 3, 4, 12, 14, 15, 1, 16, 87, 99, 74, 25, 36, 15, 39, 40};
    vector<int> sortedArr = SortArr(arr);

    for (int i : sortedArr) {
        cout << i << " ";
    }

    return 0;
}
