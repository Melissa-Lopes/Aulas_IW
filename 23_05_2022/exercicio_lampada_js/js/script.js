var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')

//console.log(botao.value)

botao.onclick = function(){
alert('Clicado!')

if(botao.value == 'acender'){
    lamp.src = './img/acesa.jpg'
    botao.value = 'Apagar'
    botao.innerHTML = 'Apagar'
}else{
    lamp.src = './img/apagada.jpg'
    botao.value = 'Acender'
}
}


