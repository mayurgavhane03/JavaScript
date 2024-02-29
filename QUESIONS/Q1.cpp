#include <bits/stdc++.h>
void frequencyOfNumericChars(const std::string& input) {
    int count[10] = {0};
    int otherCount = 0;

    for (char ch : input) {
        if (std::isdigit(ch)) {
            count[ch - '0']++;
        } else {
            otherCount++;
        }
    }

    for (int i = 0; i < 10; i++) {
        std::cout << "'" << i << "'=" << count[i] << ", ";
    }
    std::cout << "others=" << otherCount << std::endl;
}

int main() {
    frequencyOfNumericChars("raja1123labs");
    frequencyOfNumericChars("Buffet101");
    return 0;
}
