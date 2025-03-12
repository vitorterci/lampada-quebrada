var $ligar=document.getElementById('ligar')
var $desligar=document.getElementById('desligar')
var $lampada=document.getElementById('lamp')

function lampQuebrada(){
    return $lampada.src.indexOf('quebrada')>-1
}

function ligarLamp(){
    if(!lampQuebrada()){
    $lampada.src='lampada-acesa.jpg'
    }
}

function desligarLamp(){
    if(!lampQuebrada()){
        $lampada.src='lampada-apagada.jpg'
        }
}
 
function quebrarLamp(){
   $lampada.src='lampada-quebrada.jpg'
        }


$ligar.addEventListener('click',ligarLamp)
$desligar.addEventListener('click',desligarLamp)
$lampada.addEventListener('mouseover',ligarLamp)
$lampada.addEventListener('mouseleave',desligarLamp)
$lampada.addEventListener('dblclick',quebrarLamp)
