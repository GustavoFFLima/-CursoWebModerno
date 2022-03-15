let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola' // forma padrao de se usar
ola = _ => 'Ola' // possui um parametro
console.log(ola())