#include <iostream>
using namespace std;

void Answer(int n) {
    int x = n / 5;
    int T = n - x * 5;
    cout << x << endl << T << endl;
}

int main() {
    Answer(102);
    return 0;
}
