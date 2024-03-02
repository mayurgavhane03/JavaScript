#include <bits/stdc++.h>
using namespace std;





bool isLeapYear(int year){
return (year % 4 == 0 and year % 100 !=  0 ||  year % 400 == 0); 
}

int nthLeapYear(int year, int NOofYears){


    int count = 0;

    while(count<NOofYears){
        if(isLeapYear(year)) {
            count++; 
            if(count == NOofYears){
                return year;
            }
        }
        year++;
    }
}

int main(){
cout<<nthLeapYear(1819,4);
}