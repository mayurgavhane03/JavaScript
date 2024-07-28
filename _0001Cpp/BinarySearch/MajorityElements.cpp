#include<bits/stdc++.h>
using namespace std;



int main(){


    vector<int>arr={4,10,4,12,4,4,8,8,4,4,5};

    int candidate =  arr[0];
    int count = 1;
    for(int i=1; i<arr.size(); i++){
        if(arr[i]==candidate) count++;
        else count--;

        if(count==0){
            candidate =  arr[i];
            count++;
        }

    }

    cout<<"candidate  "<<candidate<<endl;

    int frqofCandidate=0;
    for(int i=0; i<arr.size(); i++){
        if(arr[i]==candidate){
            frqofCandidate++;
        }
    }

    cout<<"freqofCandidate  "<<frqofCandidate<<endl;
}