#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        unordered_map<int, int> mapi;
        vector<int> ans;

        // Count the occurrences of each number
        for(int num : nums) {
            mapi[num]++;
        }

        // Check if any number appears more than n/3 times
        for(auto pair : mapi) {
            if(pair.second > nums.size() / 3) {
                ans.push_back(pair.first);
            }
        }

        return ans;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 2, 3};
    vector<int> result = sol.majorityElement(nums);
    for(int i=0; i<nums.size(); i++) {
        cout<<result[i]<<endl;
            }
    // return result;
    return 0;
}
