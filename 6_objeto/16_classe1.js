 class Lancamento {
     constructor(nome = 'Genérico', valor = 0) {
         this.nome = nome
         this.valor = valor
     }
 }

 class CicloFinanceiro {
     constructor(mes, ano) {
         this.mes = mes
         this.ano = ano
         this.lancamento = []
     }

     addLancamentos(...lancamento) {
         lancamento.forEach(l => this.lancamento.push(l))
     }

     sumario() {
         let valorConsolidade = 0
         this.lancamento.forEach(l => {
             valorConsolidade += l.valor
         })
         return valorConsolidade
     }
 }

 const salario = new Lancamento('Salario', 45000)
 const contaDeLuz = new Lancamento('Luz', -220)

 const contas = new CicloFinanceiro(6, 2018)
 contas.addLancamentos(salario, contaDeLuz)
 console.log(contas.sumario())