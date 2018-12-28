export function kata1 (number) {
    const isNegative = number < 0;
    let str = number.toString().split('');

    if(isNegative) str.shift();

    let result = str.sort((a, b) => {
        return b - a;
    }).join('');

    if(isNegative) result = '-' + result;

    return parseInt(result);
}
