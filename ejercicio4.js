function detectorPalabras (palabra, posicion) {
    let resultado = [];
    for (let i =0; i<palabra.length; i++) {
        resultado.push(palabra[i]);
    }
    resultado.splice(posicion,1);
    return resultado.join('');
    
}

console.log(detectorPalabras('michael',3));