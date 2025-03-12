const $ligar = document.getElementById('ligar');
const $desligar = document.getElementById('desligar');
const $lampada = document.getElementById('lamp');


function lampQuebrada() {
    return $lampada.src.includes('lampada-quebrada.jpg');
}


function ligarLamp() {
    if (!lampQuebrada()) {
        $lampada.src = 'lampada-acesa.jpg';
    }
}

function desligarLamp() {
    if (!lampQuebrada()) {
        $lampada.src = 'lampada-apagada.jpg';
    }
}

function quebrarLamp() {
    $lampada.src = 'lampada-quebrada.jpg';
}


$ligar.addEventListener('click', ligarLamp);
$desligar.addEventListener('click', desligarLamp);
$lampada.addEventListener('mouseover', ligarLamp);
$lampada.addEventListener('mouseleave', desligarLamp);
$lampada.addEventListener('dblclick', quebrarLamp);
