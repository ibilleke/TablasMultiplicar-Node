const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Valor del multiplicando'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('hasta', {
                    alias: 'h',
                    type: 'number',
                    default: 10,
                    describe: 'Límite de la multiplicación'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) ) {
                        throw `La base (-b) debe ser un número`
                    }
                    if( isNaN(argv.h) ) {
                        throw `-h debe ser un número`
                    }
                    return true
                })
                .argv

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo), 'Creado' )
    .catch( err => console.log(err) )