const stickCounter = window.document.getElementById('stickers-counter');

const iconeMenos = window.document.getElementById('menos-icone');
const iconeMais = window.document.getElementById('mais-icone');

iconeMenos.addEventListener('click', decrementa)
iconeMais.addEventListener('click', incrementa)

function decrementa(){
  stickCounter.value--;
}

function incrementa(){
  stickCounter.value++;
}