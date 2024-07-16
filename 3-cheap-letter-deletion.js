function solution(S, C) {
    // Initialize the total cost to 0
    let finalCost = 0;

    // Iterate through the string from the second character
    for (let i = 1; i < S.length; i++) {
        // If the current character is the same as the previous character
        if (S[i] === S[i - 1]) {
            // Add the minimum cost to the total cost
            finalCost += Math.min(C[i], C[i - 1]);
            // Remove the character with the lower cost
            if (C[i] < C[i - 1]) {
                C[i] = C[i - 1];
            }
        }
    }

    return finalCost;
}

// Test cases
console.log(solution('abccbd', [0, 1, 2, 3, 4, 5])); // Returns: 2
console.log(solution('aabbcc', [1, 2, 1, 2, 1, 2])); // Returns: 3
console.log(solution('aaaa', [3, 4, 5, 6])); // Returns: 12
console.log(solution('ababa', [10, 5, 10, 5, 10])); // Returns: 0
