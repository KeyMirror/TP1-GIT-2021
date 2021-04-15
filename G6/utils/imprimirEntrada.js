
const imprimirEntrada = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

   readline.question('Hola Entrada: ', prueba => {
        console.log(`Resultado: ${prueba}`); 
        readline.close(); 
   }); 
}

module.exports = {imprimirEntrada}; 