#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int i = low;
    int j = high + 1;
    int x = arr[low];

    do {
        do {
            i++;
        } while (i <= high && arr[i] < x);

        do {
            j--;
        } while (j >= low && arr[j] > x);

        if (i < j) {
            swap(arr[i], arr[j]);
        }
    } while (i < j);

    swap(arr[low], arr[j]);
    return j;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int j = partition(arr, low, high);
        quickSort(arr, low, j - 1);
        quickSort(arr, j + 1, high);
    }
}

vector<int> SortArr(vector<int> arr) {
    int low = 0;
    int high = arr.size() - 1;
    quickSort(arr, low, high);
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
