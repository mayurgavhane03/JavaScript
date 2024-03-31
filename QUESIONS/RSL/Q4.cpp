#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>

using namespace std;

bool isValid(string s) {
    stack<char> bracketStack;
    unordered_map<char, char> brackets = {{')', '('}, {']', '['}, {'}', '{'}};

    for (int i = 0; i < s.size(); i++) {
        if (brackets.find(s[i]) == brackets.end()) {
            // If it's an opening bracket, push it onto the stack
            bracketStack.push(s[i]);
        } else {
            // If it's a closing bracket
            if (bracketStack.empty() || bracketStack.top() != brackets[s[i]]) {
                // If there's no matching opening bracket or the top of the stack
                // does not match the corresponding opening bracket, return false
                return false;
            }
            // Otherwise, pop the corresponding opening bracket from the stack
            bracketStack.pop();
        }
    }

    // If the stack is empty, all brackets are matched, return true
    // Otherwise, return false
    return bracketStack.empty();
}

int main() {
    // Test cases
    cout << isValid("()") << endl;        // Output: 1 (true)
    cout << isValid("()[]{}") << endl;    // Output: 1 (true)
    cout << isValid("(]") << endl;        // Output: 0 (false)
    cout << isValid("([)]") << endl;      // Output: 0 (false)
    cout << isValid("{[]}") << endl;      // Output: 1 (true)
    
    return 0;
}
