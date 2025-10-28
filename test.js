const sumar = require('./index.js');

function runTest() {
  console.log('Iniciando prueba de V&V...');
  
  const valorEsperado = 7;
  const valorActual = sumar(4, 3);

  if (valorActual === valorEsperado) {
    console.log(`✅ PRUEBA EXITOSA: Se esperaba ${valorEsperado}, se obtuvo ${valorActual}.`);
    
  } else {
    console.error(`❌ PRUEBA FALLIDA: Se esperaba ${valorEsperado} pero se obtuvo ${valorActual}.`);
    process.exit(1); 
  }
}

// Correr la prueba
runTest();