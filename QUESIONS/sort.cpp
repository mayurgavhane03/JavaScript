#include <iostream>
#include <vector>

void selectionSort(std::vector<int>& nums) {
    int n = nums.size();
    for (int i = 0; i < n - 1; ++i) {
       
        for (int j = i + 1; j < n; ++j) {
            if (nums[j] < nums[min_idx]) {
                // Manual swapping without using std::swap
                int temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
}

int main() {
    std::vector<int> nums = {1, 1, 1, 3, 2, 1, 3, 1, 3, 2, 3, 1};

    selectionSort(nums);

    for (int num : nums) {
        std::cout << num << " ";
    }

    return 0;
}
