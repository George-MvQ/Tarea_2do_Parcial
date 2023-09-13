const tipoProblema = document.getElementById('tipoProblema');
const distanciaFields = document.getElementById('distanciaFields');
const tiempoFields = document.getElementById('tiempoFields');
const velocidadFields = document.getElementById('velocidadMRU'); // Nuevo campo
const btnCalcularDistanciaMRU = document.getElementById('btnCalcularDistancia')
const btnCalcularTiempoMRU = document.getElementById('btnCalcularTiempoMRU')
const btnCalcularVelocidaMRU = document.getElementById('btnCalcularVelocidadMRU')
const tipoRespuesta = document.getElementById('tipoRespuestaMRU')
const resultadoCalculado = document.getElementById('resultadoCalculoMRU')
const imgRespuestaMRU = document.getElementById('imgRespuestaMRU')


tipoProblema.addEventListener('change', () => {
   // label.textContent = ''
    if (tipoProblema.value === 'distancia') {
        distanciaFields.style.display = 'block';
        tiempoFields.style.display = 'none';
        velocidadFields.style.display = 'none'; // Ocultar campo de velocidad
    } else if (tipoProblema.value === 'tiempo') {
        distanciaFields.style.display = 'none';
        tiempoFields.style.display = 'block';
        velocidadFields.style.display = 'none'; // Ocultar campo de velocidad
    } else if (tipoProblema.value === 'velocidad') {
        distanciaFields.style.display = 'none';
        tiempoFields.style.display = 'none';
        velocidadFields.style.display = 'block'; // Mostrar campo de velocidad
    }
});

//calculando distrancia MRU
btnCalcularDistanciaMRU.addEventListener('click', () => {
    const tiempo = document.getElementById('tiempoDistancia').value
    const velocidad = document.getElementById('velocidadDistancia').value
    tipoRespuesta.textContent = 'LA DISTANCIA ES:'
    resultadoCalculado.textContent = `${redondeo(velocidad * tiempo)}m`
    imgRespuestaMRU.src = '../../media/images/distanciaMRU.png'

});

//calculando tiempo MRU
btnCalcularTiempoMRU.addEventListener('click', () => {
    const distancia = document.getElementById('distanciaTiempo').value
    const velocidad = document.getElementById('velocidadTiempo').value
    tipoRespuesta.textContent = 'EL TIEMPO ES:'
    resultadoCalculado.textContent = `${redondeo(distancia / velocidad)} s`
    imgRespuestaMRU.src = '../../media/images/tiempoMRU.png'
});

//calculando velocidad MRU
btnCalcularVelocidaMRU.addEventListener('click', () => {
    const tiempo = document.getElementById('tiempoVelocidad').value
    const distancia = document.getElementById('distanciaVelocidad').value
    tipoRespuesta.textContent = 'LA VELOCIDAD ES:'
    resultadoCalculado.textContent = `${redondeo(distancia / tiempo)} m/s`
    imgRespuestaMRU.src='../../media/images/velocidadMRU.png'

  
});

function redondeo(valor) {
    const residuo = valor - (Math.round(valor))
    if (residuo === 0) {
        return valor
    }
    else {
        return valor.toFixed(2)
    }
}





