const fatorial = require('./fatorial')//.fatorial --> se eu exporta com modulo.exports nao preciso mas referencia fatotorial

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv
//const num = process.argv[2]
const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

// Como teste no console
// node main.js --num=6