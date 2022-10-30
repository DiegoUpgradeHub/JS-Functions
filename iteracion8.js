//**Iteration #8: Contador de repeticiones**
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
/*
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
  // insert code
}
*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
/*
function repeatCounter(param) {
    let items = [];
    let repeatedItems = [];
    for (let i = 0; i < param.length; i++) {
        if (!items.includes(param[i])) {
            items.push(param[i]);
        }
        if (items.includes(param[i])) {
            repeatedItems.push(param[i]);
        }
    }
    return items;
}

console.log(repeatCounter(counterWords));
*/

//const counts = {};
//const sampleArray = ['a', 'a', 'b', 'c'];
//sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
//console.log(counts)
/*
function repeatCounter(param) {
    let counter = [];
    for (let i = 0; i < param.length; i++) {
        
        if (!counter.includes(param[i])) {
            counter.push(param[i]);
        } else if (counter.includes(param[i])) {
            counter[i] = (counter[i] || 1) + 1;
        }
    }
    return counter;
}
console.log(repeatCounter(counterWords));
*/
function repeatCounter(param) {
    let counter = {};
    for (let i = 0; i < param.length; i++) {
        if (param[i] in counter) {
        counter[param[i]]++;
        } else {
        counter[param[i]] = 1;
        }
    }
    return console.log(counter);
}

repeatCounter(counterWords);