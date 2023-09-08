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
    const newArray = array.reduce((acc, cv) => acc.concat(cv), []).sort((a, b) => a - b)
    return newArray;
}

//103
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};

//104
function noOdds(values) {
    const newArr = values.filter(el => el % 2 === 0)
    return newArr
}

//105
function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers)
}

//106
function outed(meet, boss) {
    let sum = 0;
    let count = 0;
    for (let key in meet) {
        if (key !== boss) {
            sum += meet[key]
            count++
        } else {
            sum += meet[key] * 2
            count++
        }
    }
    return sum / count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'

}

//107
function maxProduct(a) {
    const maxValue1 = Math.max(...a)
    a.splice(a.indexOf(maxValue1), 1)
    const maxValue2 = Math.max(...a)
    return maxValue1 * maxValue2
}

//108
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

//109
var AmIAfraid = function (day, num) {
    if (day === 'Monday' & num === 12) {
        return true
    } else if (day === 'Tuesday' & num > 95) {
        return true
    } else if (day === 'Wednesday' & num === 34) {
        return true
    } else if (day === 'Thursday' & num === 0) {
        return true
    } else if (day === 'Friday' & num % 2 === 0) {
        return true
    } else if (day === 'Saturday' & num === 56) {
        return true
    } else if (day === 'Sunday' & (num === 666 || num === -666)) {
        return true
    } else {
        return false
    }
}

//110
function getCount(str) {
    const vowels = 'aeiou'
    let countVowels = 0
    for (let i = 0; i <= str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            countVowels += 1
        }
    }
    return countVowels
}

//111
function twoArePositive(a, b, c) {
    return [...arguments].filter(i => i > 0).length === 2;
}

//112
const FilterString = function (value) {
    return +value.replace(/\D+/g, '')
}

//113
function matrixAddition(a, b) {
    const n = a.length
    let matrix = Array.from({length: n}, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = a[i][j] + b[i][j]
        }
    }
    return matrix
}
//114
function twoHighest(arr) {
    const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.slice(0, 2);
}

//115
var replaceDots = function(str) {
    return str.replace(/\./g, '-');

}

//116
function twoSum(numbers, target) {
    for (let i=0;i<numbers.length-1;i++){
    for (let j=0;i<numbers.length;j++) {
        if(numbers[i]+numbers[j]===target){
            return [i,j]
        }
    }
    }
}