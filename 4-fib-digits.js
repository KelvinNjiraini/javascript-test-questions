function solution(N) {
    const sumOfDigits = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let sequence = [0, 1];
    let seen = new Map();
    seen.set('0,1', 0);

    let index = 2;

    while (index <= N) {
        let nextElement =
            sumOfDigits(sequence[index - 1]) + sumOfDigits(sequence[index - 2]);
        let key = `${sequence[index - 1]},${nextElement}`;

        if (seen.has(key)) {
            let cycleStart = seen.get(key);
            let cycleLength = index - cycleStart;
            let cycleIndex = ((N - cycleStart) % cycleLength) + cycleStart;
            return sequence[cycleIndex];
        }

        sequence.push(nextElement);
        seen.set(key, index);
        index++;
    }

    return sequence[N];
}

// Test cases
console.log(solution(2)); // Returns: 1
console.log(solution(6)); // Returns: 8
console.log(solution(10)); // Returns: 10
