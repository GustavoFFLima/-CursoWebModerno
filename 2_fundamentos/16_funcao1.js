// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 3)
imprimirSoma()

//Funcao com retorno
function soma(a = 0, b = 1) { // apenas o b é = 1
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
