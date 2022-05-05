const square = (array) => {
    let newArray = []

    for (element of array) {
        newArray.push(Math.pow(element, 2))
    }

    newArray = newArray.sort((a, b) => a - b)

    return newArray
}


const array = [1, 2, 3, 5, 6, 8, 9]
const newArray = square(array)
console.log(newArray)