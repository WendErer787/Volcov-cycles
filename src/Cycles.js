export function rangeSum(start, end) {
    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

export function iterationCount(a) {
    let count = 0;

    while (a > 0.1) {
        a = a / 2;
        count++;
    }

    return count;
}

export function symbolsReplace(message) {
    let chars = message.split('');
    let i = 0;

    if (chars.length === 0) {
        return message; // Возвращаем пустую строку, если на вход пришла пустая
    }

    do {
        if ((i + 1) % 3 === 0) {
            chars[i] = '_';
        }
        i++;
    } while (i < chars.length);

    return chars.join('');
}
