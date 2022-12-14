// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Example: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


const number = (arr) => {
    const newArr = []
    let num = 1

    for (let i = 0; i < arr.length; i++) {
        newArr.push(`${num}: ${arr[i]}`)
        num++
    }
    return newArr
}

console.log(number(['a', 'b', 'c']))