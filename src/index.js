module.exports = function toReadable(number) {
    const words = {
        0: '0',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve'
    }
    let firstNumber = number.toString().slice(0, 1)
    let secondNumber = number.toString().slice(1, 2)
    let thirdNumber = number.toString().slice(2, 3)
    let result = '';




    if (number === 0){
        result = 'zero'
    } else if (number < 10) {
        result = words[number]
    } else if ( number === 10) {
        result = words[number]
    } else if (number === 11) {
        result = words[number]
    } else if (number === 12) {
        result = words[number]
    } else if (number < 18 && number > 15) {
        result = words[secondNumber] + 'teen'
    } else if (number < 18 && number > 15) {
        result = words[secondNumber] + 'teen'
    } else if (number === 14) {
        result = words[secondNumber] + 'teen'
    } else if (number === 13) {
        result = words[secondNumber].slice(0, 2) + 'irteen'
    } else if (number < 16 && number > 14 ) {
        result = words[secondNumber].slice(0, 2) + 'fteen'
    } else if (number < 18 && number > 15 ) {
        result = words[secondNumber] + 'teen'
    } else if (number < 20 && firstNumber === '1' && secondNumber === '8') {
        result = words[secondNumber] + 'een'
    } else if (number < 20 && firstNumber === '1' && secondNumber === '9') {
        result = words[secondNumber] + 'teen'
    } else if (number > 19 && number < 100 && firstNumber === '2' && secondNumber === '0') {
        result = words[firstNumber].slice(0, 2) + 'enty'
    } else if (number > 19 && number < 100 && firstNumber === '2') {
        result = words[firstNumber].slice(0, 2) + 'enty ' + words[secondNumber]
    } else if (number > 19 && number < 100 && firstNumber === '3' && secondNumber === '0') {
        result = words[firstNumber].slice(0, 2) + 'irty'
    } else if (number > 19 && number < 100 && firstNumber === '3') {
        result = words[firstNumber].slice(0, 2) + 'irty ' + words[secondNumber]
    } else if (number > 19 && number < 100 && firstNumber === '4' && secondNumber === '0') {
        result = words[firstNumber].slice(0, 2) + 'rty'
    } else if (number > 19 && number < 100 && firstNumber === '4') {
        result = words[firstNumber].slice(0, 2) + 'rty ' + words[secondNumber]
    } else if (number > 19 && number < 100 && firstNumber === '5' && secondNumber === '0') {
        result = words[firstNumber].slice(0, 2) + 'fty'
    } else if (number > 19 && number < 100 && firstNumber === '5') {
        result = words[firstNumber].slice(0, 2) + 'fty ' + words[secondNumber]
    } else if (number > 19 && number < 100 && firstNumber === '8' && secondNumber === '0') {
        result = words[firstNumber] + 'y'
    } else if (number > 19 && number < 100 && firstNumber === '8') {
        result = words[firstNumber] + 'y ' + words[secondNumber]
    } else if (number > 19 && number < 100 && secondNumber === '0') {
        result = words[firstNumber] + 'ty'
    } else if (number > 19 && number < 100) {
        result = words[firstNumber] + 'ty ' + words[secondNumber]
    } else if (number >= 100 && secondNumber === '0' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred'
    } else if (number > 100 && secondNumber === '9' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '9' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty'
    } else if (number > 100 && secondNumber === '8' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'y ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '8' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'y'
    } else if (number > 100 && secondNumber === '7' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '7' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty'
    } else if (number > 100 && secondNumber === '6' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '6' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber] + 'ty'
    } else if (number > 100 && secondNumber === '5' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'fty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '5' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'fty'
    } else if (number > 100 && secondNumber === '4' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'rty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '4' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'rty'
    } else if (number > 100 && secondNumber === '3' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'irty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '3' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'irty'
    } else if (number > 100 && secondNumber === '2' && thirdNumber !== '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'enty ' + words[thirdNumber]
    } else if (number > 100 && secondNumber === '2' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[secondNumber].slice(0, 2) + 'enty'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '9') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber] + 'teen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '8') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber] + 'een'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '7') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber] + 'teen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '6') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber] + 'teen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '5') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber].slice(0, 2) + 'fteen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '5') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber].slice(0, 2) + 'fteen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '4') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber] + 'teen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '3') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber].slice(0, 2) + 'irteen'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '2') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber].slice(0, 2) + 'elve'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '1') {
        result = words[firstNumber] + ' hundred ' + 'eleven'
    } else if (number > 100 && secondNumber === '1' && thirdNumber === '0') {
        result = words[firstNumber] + ' hundred ' + 'ten'
    } else if (number > 100 && secondNumber === '0') {
        result = words[firstNumber] + ' hundred ' + words[thirdNumber]
    }
    return result
}
