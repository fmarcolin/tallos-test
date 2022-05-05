const minimumChangeSum = (array) => {
    if (array.length === 1)
        return array[0]

    const sortedValues = array.sort((a, b) => a - b)
    let minimumSum = sortedValues[0];

    for (let i = 0; i < sortedValues.length; i++) {
        if (sortedValues[i] > minimumSum)
            return minimumSum

        minimumSum += sortedValues[i];
    }

    return minimumSum;
}

const testCase1 = [5, 7, 1, 1, 2, 3, 22]
const testCase2 = [1, 1, 1, 1, 1]
const testCase3 = [1, 5, 1, 1, 1, 10, 15, 20, 100]

console.log(minimumChangeSum(testCase1))
console.log(minimumChangeSum(testCase2))
console.log(minimumChangeSum(testCase3))