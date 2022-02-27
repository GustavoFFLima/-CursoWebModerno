let valor // nao inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro! String underfined

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir underfined, opte por null 
console.log(produto)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) //identifica se ter preco
console.log(produto)
