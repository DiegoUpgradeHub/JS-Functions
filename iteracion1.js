//Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.
//function sum(numberOne , numberTwo) {
    // insert code
//}

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } if (numberTwo > numberOne) {
        return numberTwo;
    } else {
        return 'They are equal';
    }
}

console.log(sum(2, 4));
console.log(sum(5, 4));
console.log(sum(4, 4));