// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

let numbers = [0, 2, 0, 2] // test each number to reach the target
let target = 4

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i]
        //console.log(`currentNum = ${currentNum}`)
        let difference = (currentNum - target) * -1
        //console.log(`difference = ${difference}`)
        let index = numbers.indexOf(difference, i + 1)
        console.log(`indexOF = ${index}`)
        if (index > i) {
            return [i, numbers.indexOf(difference, i + 1)]
        }
    }
}

twoSum(numbers, target)