console.log('- EJERCICIO B -')
var cantidadDeGatos = 5;
    var cantidadDePasos = 3;
    
    for (var i = 1; i <= cantidadDeGatos; i++) {
        var pasos = '';
        
        for (var j = 0; j < cantidadDePasos; j++) {
            pasos += '🐾';
        }
        
    console.log("Gato #" + i + ": 🐈" + pasos);
    }