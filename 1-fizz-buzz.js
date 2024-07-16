function solution(N) {
    // get rid of negative numbers
    if (N < 0) return;

    for (let i = 1; i <= N; i++) {
        //  If the number is a power of 2, print "POWER"
        if (i > 0 && (i & (i - 1)) === 0) console.log('POWER');
        else console.log(i);
    }
}

// Test cases
solution(7);
solution(16);
