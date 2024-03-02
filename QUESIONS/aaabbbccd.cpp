#include <iostream>
#include <string>

std::string compressString(const std::string& str) {
    std::string compressed;
    int count = 1;
    
    for (int i = 1; i <= str.length(); ++i) {
        if (i < str.length() && str[i] == str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + std::to_string(count);
            count = 1;
        }
    }

    return (compressed.length() < str.length()) ? compressed : str;
}

int main() {
    std::cout << compressString("aabcccccaaa") << std::endl;  // Output: a2b1c5a3
    std::cout << compressString("abcd") << std::endl;          // Output: abcd

    return 0;
}
