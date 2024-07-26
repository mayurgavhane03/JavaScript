#include <iostream>
#include <vector>
#include <algorithm> // For sort function

using namespace std;

vector<int> Union(vector<int>& arr1, vector<int>& arr2) {
    // Sort the input arrays
    sort(arr1.begin(), arr1.end());
    sort(arr2.begin(), arr2.end());

    int i = 0;
    int j = 0;
    vector<int> ans;

    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] < arr2[j]) {
            if (ans.empty() || ans.back() != arr1[i]) {
                ans.push_back(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (ans.empty() || ans.back() != arr2[j]) {
                ans.push_back(arr2[j]);
            }
            j++;
        } else {
            if (ans.empty() || ans.back() != arr1[i]) {
                ans.push_back(arr1[i]);
            }
            i++;
            j++;
        }
    }

    while (i < arr1.size()) {
        if (ans.empty() || ans.back() != arr1[i]) {
            ans.push_back(arr1[i]);
        }
        i++;
    }

    while (j < arr2.size()) {
        if (ans.empty() || ans.back() != arr2[j]) {
            ans.push_back(arr2[j]);
        }
        j++;
    }

    return ans;
}

int main() {
    vector<int> arr1 = {1, 2, 5, 3, 4, 12, 14, 15, 1, 16, 87, 99, 74, 25, 36, 15, 39, 40};
    vector<int> arr2 = {1, 2, 5, 3, 4, 12, 14, 15, 1, 16, 87, 99, 74, 25, 36, 15, 39, 40};
    
    vector<int> UnionArr = Union(arr1, arr2);

    for (int i : UnionArr) {
        cout << i << " ";
    }

    return 0;
}
