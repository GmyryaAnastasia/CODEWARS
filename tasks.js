//89
function squareOrSquareRoot(array) {
    return array.map(el => Math.sqrt(el) % 1 == 0 ? Math.sqrt(el) : (el * el))

}

//90
websites.push('codewars')

//91
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

//92
function periodIsLate(last, today, cycleLength) {
    return ((today - last) / (60 * 60 * 24 * 1000)) > cycleLength ? true : false
}

//93
function ifChuckSaysSo() {
    return !true
}

//94
function divisibleBy(numbers, divisor) {
    let newArray = []
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            newArray.push(numbers[i])
        }
    }
    return newArray
}

//95
function smash(words) {
    return words.join(' ').trim()
};

//96
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

//97
function positiveSum(arr) {
    return arr.map(el => el > 0 ? el : 0).reduce((acc, number) => acc + number, 0)


}

//98
function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2)
    const uniАrr = arr3.sort((a, b) => a - b)
    return uniАrr.filter((el, id) => uniАrr.indexOf(el) === id);

}

//99
function sumMix(x) {
    let sum = 0
    x.map(el => sum += Number(el))
    return sum
}

//100
function well(x) {
    const well = x => {
        const good_count = x.filter(x => x == 'good').length;
        return good_count < 1 ? 'Fail!' :
            good_count < 3 ? 'Publish!' : 'I smell a series!';
    }
}

//101
items = []
items.push({a: "b", c: "d"})

//102
function flattenAndSort(array) {
    const newArray=array.reduce((acc,cv)=>acc.concat(cv),[]).sort((a,b)=>a-b)
    return newArray;
}
//103
function sortByLength (array) {
    return array.sort ((a,b)=> a.length - b.length)
};

//104
function noOdds( values ){
    const newArr=values.filter(el=>el%2===0)
    return newArr
}