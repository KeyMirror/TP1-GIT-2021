
const imprimirEntrada = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

   readline.question('La entrada definitiva: ', prueba => {
        console.log(`Resultado: ${prueba}`); 
        readline.close(); 
   }); 
}

module.exports = {imprimirEntrada}; 
