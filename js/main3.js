var cantidadGatos = 10;
var cantidadPatas = 4;

for (var i = 1; i <= cantidadGatos; i++) {

    var paso = ''

    for (var j = 1; j <= cantidadPatas; j++) {

        paso += '🐾'

    }

    var gatoNyB = (i % 2 == 0 ? '🐈⬛' : '🐈')

    console.log('Gato #' + i + gatoNyB + paso)

}