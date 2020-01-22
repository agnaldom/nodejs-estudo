const fatorial = require('./fatorial')//.fatorial --> se eu exporta com modulo.exports nao preciso mas referencia fatotorial

console.log('n-fatorial')

/*console.log(`Executando o script a partir do diretório %{process.cwd()}`)

process.on('exit', ()=>{
    console.log('script está prestes a terminar')
})*/

//console.log(process.argv)
const num = process.argv[2]

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)