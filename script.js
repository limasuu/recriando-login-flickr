const emailInput= document.querySelector("#email");
const descEmailLabel= document.querySelector("#descricao-email");

const senhaInput= document.querySelector("#senha");
const descSenhaLabel= document.querySelector("#descricao-senha");
const olharSenhaButton= document.querySelector("#olhar-senha");

const proximaButton= document.querySelector("#botao-proxima");
const msgLoginLabel= document.querySelector("#msg-login");

const alertaDiv=document.querySelector("#alerta");
const areaPrincipalDiv= document.querySelector("#principal");
const tentarNovamButton= document.querySelector("#botao-tentar");
const continueYahooButton= document.querySelector("#botao-continue-yahoo");

let digitou= false;

window.onload= () => {
    emailInput.focus();
    emailInput.value= "";
    senhaInput.value= "";    
};

// --------------------------------------------------------
emailInput.addEventListener('keypress', () => {
    digitou= true;
});

emailInput.addEventListener('focusin', () => {
    descEmailLabel.classList.add("descricao-login-menor");
});

emailInput.addEventListener('focusout', () => {

    const valorEmail= emailInput.value;

    if(valorEmail === ""){
        descEmailLabel.classList.remove("descricao-login-menor");

        if(digitou)
            definirObrigatorio(emailInput, descEmailLabel);  
    
    }else{        
        if(emailInput.classList.contains("campo-obrigatorio"))            
            removerObrigatorio(emailInput, descEmailLabel);        
    }
});

// --------------------------------------------------------

proximaButton.addEventListener('click', (e) => {
    e.preventDefault();

    const valorEmail= emailInput.value;

    if(valorEmail === ""){
        definirObrigatorio(emailInput, descEmailLabel);       

        return;
    }else{

        var i= valorEmail.indexOf('@');
        var controle= false;

        if(i != -1){
            var finalEmail= valorEmail.substring(i);

            if(finalEmail.includes('.'))
                controle= true;            
        }

        if(!controle){    
            alertaDiv.classList.remove("oculto");
            areaPrincipalDiv.classList.add("segundo-plano");

            return;
        } 
        
    }
    
    const senhaDiv= document.querySelector("#campo-senha");
    const concluiLoginDiv= document.querySelector("#conclui-login");
    proximaButton.classList.add("oculto");    
    senhaDiv.classList.remove("oculto");
    concluiLoginDiv.classList.remove("oculto");
    senhaInput.focus();
    digitou= false;
});

// --------------------------------------------------------

tentarNovamButton.addEventListener('click', () => {
    alertaDiv.classList.add("oculto");
    areaPrincipalDiv.classList.remove("segundo-plano");
});

continueYahooButton.addEventListener('click', () => {   
    window.location.replace("https://login.yahoo.com/");
});

// --------------------------------------------------------

senhaInput.addEventListener('keypress', () => {
    digitou= true;
});

senhaInput.addEventListener('focusin', () => {
    descSenhaLabel.classList.add("descricao-login-menor");
});

senhaInput.addEventListener('focusout', () => {

    const valorSenha= senhaInput.value;

    if(valorSenha === ""){
        descSenhaLabel.classList.remove("descricao-login-menor");

        if(digitou)
            definirObrigatorio(senhaInput, descSenhaLabel);
    }else{
        if(senhaInput.classList.constains("campo-obrigatorio"))
            removerObrigatorio(senhaInput, descSenhaLabel);
    }
});



// --------------------------------------------------------

function definirObrigatorio(input, label){
    input.classList.add("campo-obrigatorio");
    label.classList.add("obrigatorio");
    label.classList.add("em-branco");
    msgLoginLabel.classList.add("obrigatorio");
    msgLoginLabel.textContent= "Obrigatório";    
}
            
function removerObrigatorio(input, label){
    input.classList.remove("campo-obrigatorio");
    label.classList.remove("obrigatorio");
    label.classList.remove("em-branco");
    msgLoginLabel.classList.remove("obrigatorio");
    msgLoginLabel.textContent= "";
}

