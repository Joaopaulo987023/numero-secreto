
function gameOver(chute){
    
    if(chute === 'game over'){
        document.body.innerHTML = '<h2>GAME OVER</h2>'
        document.body.style.backgroundColor = '#DF2E38';

    }
}
    

function verificaSeOChutePossuiValorValido(valorChute){
    const numero = +valorChute //transformando valor string em array
    if (chuteForInvalido(numero)){ // verificando se o valor é um número invalido
        elementoChute.innerHTML+=`<div>Valor invalido</div>`
        return
    }
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML+=`<div>Valor invalido, fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        
        document.body.innerHTML=`<h2>Voce acertou !! </h2>
        <h3> O numero secreto era ${numeroSecreto}</h3>
        <button id ='jogar-novamente' class = 'btn-jogar' >JOGAR NOVAMENTE</button>`
        document.body.style.backgroundColor = '#F5B971';
       
        
         
    }
   
    else if(numero>numeroSecreto){
        elementoChute.innerHTML+=`<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
   
    else{
        elementoChute.innerHTML+=`<div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero); // retornando o valor para saber se é true ou false
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero >maiorValor || numero < menorValor
}
document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-jogar')){
        window.location.reload(); // ná janela atual atualize a url 
    }
})
