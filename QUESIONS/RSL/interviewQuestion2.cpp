#include <bits/stdc++.h>
using namespace std;

bool isPower(int n){

    for(int i=0; i<n; i= i * 4){
        if(i==0) return true;
    }
    return false;
}

int Power(int n, int r){
    // int pow=1;   
    int ans= 1;
    for(int i=0; i<r; i++){
        ans = ans * n;
    }
    return ans;
}
//same hi he
int Cube(int n, int r){

    int ans = 1;

    for(int i=0; i<r; i++){
        ans  = ans * n ;
    }
    return ans;
}

int main(){

bool check = isPower(78);
int pow =  Power(9,78);
int cube = Cube(3,3);
cout<< cube << endl;
// cout<<pow<<endl;
// cout<<check<<endl;

}