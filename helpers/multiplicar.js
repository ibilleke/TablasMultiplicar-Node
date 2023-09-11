const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base, listar, hasta) => {
    try { 
        let salida = ''
        let consola = ''
        
        for (let a = 1; a <= hasta; a++) {
            consola += `${colors.red(base)} ${"x".green} ${colors.blue(a)} ${"=".yellow} ${colors.magenta(base * a)}\n`
            salida += `${base} x ${a} = ${base * a}\n`
        }

        if(listar) {
            console.log('===================='.rainbow)
            console.log(`    Tabla del: ${base}     `.rainbow);
            console.log('===================='.rainbow)
            console.log(consola)
        } 

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
       throw error
    }
}

module.exports = {
    crearArchivo
}