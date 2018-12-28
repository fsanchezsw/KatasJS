export function kata3 (n, m) {
    const checkDivisor = (index) => {
        let sum = 0;
        for(let d = index; d >= 1; d--)
            if(index % d == 0) sum += d*d;

        if(Number.isInteger(Math.sqrt(sum))) return sum;
        else return null;
    }

    let solution = [];

    for(let i = n; i <= m; i++)
        if(checkDivisor(i)) solution.push([i, checkDivisor(i)]);

    return solution;
}
