const horas = document.getElementByid('horas');
const minutos = document.getElementByid('minutos');
const segundos = document.getElementByid('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Dat();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(seg<10) seg = '0' +  seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})