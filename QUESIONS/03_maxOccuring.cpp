#include <bits/stdc++.h>
using namespace std;

vector<int> freq(vector<int> arr)
{
    sort(arr.begin(), arr.end());
    int count = 1;
    vector<int> ans;

    for(int i = 0; i < arr.size(); i++)
    {
        count = 0 ;

        for (int j = 0; j < arr.size(); j++)
        {
            if(arr[i]==arr[j]){
                count++;
            }
        }
        ans.push_back(count);
        count = 0;
    }

    return ans;
}

int main()
{
    vector<int> arr = {1, 7, 2, 5, 5, 4, 4, 8, 7, 9, 6, 3, 2, 5, 5, 6, 6, 6, 3, 2, 1, 4, 5};
    vector<int> ans = freq(arr);

    for (int i = 0; i < ans.size(); i++) {
        cout << ans[i] << endl;
    }

    return 0;
}
