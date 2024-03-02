#include <iostream>
#include <string>
#include <cctype>

void frequencyOfNumericChars(const std::string& input) {
    int count[10] = {0}; // Initializing counts for numeric characters
    int otherCount = 0; // Initializing count for non-numeric characters

    for (char ch : input) {
        if (isdigit(ch)) {
            count[ch - '0']++; // Increment count for numeric characters
        } else {
            otherCount++; // Increment count for non-numeric characters
        }
    }

    // Displaying counts for numeric characters from 0 to 9
    for (int i = 0; i <= 9; i++) {
        if(count[i]>0)
        std::cout << "'" << i << "'=" << count[i] << ", ";
    }
    // Displaying count for non-numeric characters
    std::cout << "others=" << otherCount << std::endl;
}

int main() {
    // Example usage
    frequencyOfNumericChars("raja1123labs");
    frequencyOfNumericChars("Buffet101");

    return 0;
}
