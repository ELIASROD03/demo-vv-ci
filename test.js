const sumar = require('./index.js');

function runTest() {
  console.log('Iniciando prueba de V&V...');
  
  const valorEsperado = 5;
  const valorActual = sumar(2, 3);

  if (valorActual === valorEsperado) {
    console.log(`✅ PRUEBA EXITOSA: Se esperaba ${valorEsperado}, se obtuvo ${valorActual}.`);
    // ¡No necesitamos process.exit(0)! El script terminará exitosamente.
  } else {
    console.error(`❌ PRUEBA FALLIDA: Se esperaba ${valorEsperado} pero se obtuvo ${valorActual}.`);
    process.exit(1); // ¡Esto SÍ es necesario para decirle a GitHub que la prueba falló!
  }
}

// Correr la prueba
runTest();