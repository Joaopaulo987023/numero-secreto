window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();


//criando um evento para captura a voz e exibir no console
recognition.addEventListener('result', (e)=>{
    const chute = e.results[0][0].transcript; //navegando pelo dom até encontrar o valor que foi dito
    mostraChuteNaTela(chute)
    verificaSeOChutePossuiValorValido(chute);
    
})

function mostraChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse : </div>
    <span class= 'box'>${chute}</span>` // criando divs para que apareça o valor que foi dito na tela.
    
}
recognition.addEventListener('end',() => recognition.start())