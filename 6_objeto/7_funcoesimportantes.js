const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'daraNascimento', {
    enumerable: true, // passiva de ser listavel?
    writable: false, // permite ser modificada?
    value: '01/01/2019'
})

pessoa.daraNascimento = '01/01/2017' // Nao permite mudar por causa do comando writable
console.log(pessoa.daraNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript) 2015
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3}
const obj = Object.assign(dest, o1, o2) // pega todos atributos e joga no objeto de destino ( se tiver um objeto ja descrito, ele sera sobrescrito)

Object.freeze(obj)
obj.c = 1234
console.log(obj)