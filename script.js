const emailInput= document.querySelector("#email");
const descEmailLabel= document.querySelector("#descricao-email");

const proximaButton= document.querySelector("#botao-proxima");
const msgLoginLabel= document.querySelector("#msg-login");

const alertaDiv=document.querySelector("#alerta");
const areaPrincipalDiv= document.querySelector("#principal");
const tentarNovamButton= document.querySelector("#botao-tentar");
const continueYahooButton= document.querySelector("#botao-continue-yahoo");


window.onload= () => {
    emailInput.value= "";
};

// --------------------------------------------------------

emailInput.addEventListener('focusin', () => {
    descEmailLabel.classList.add("descricao-login-menor");
});

emailInput.addEventListener('focusout', () => {

    const valorEmail= emailInput.value;

    if(valorEmail === ""){
        descEmailLabel.classList.remove("descricao-login-menor");
    
    }else{        
        if(emailInput.classList.contains("campo-obrigatorio")){
            
            emailInput.classList.remove("campo-obrigatorio");
            descEmailLabel.classList.remove("obrigatorio");
            msgLoginLabel.classList.remove("obrigatorio");
            msgLoginLabel.textContent= "";
        }
    }
});


// --------------------------------------------------------

proximaButton.addEventListener('click', (e) => {
    e.preventDefault();

    const valorEmail= emailInput.value;

    if(valorEmail === ""){
        emailInput.classList.add("campo-obrigatorio");
        descEmailLabel.classList.add("obrigatorio");
        descEmailLabel.classList.add("embranco");
        msgLoginLabel.classList.add("obrigatorio");
        msgLoginLabel.textContent= "Obrigatório";

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
   
});

// --------------------------------------------------------

tentarNovamButton.addEventListener('click', () => {
    alertaDiv.classList.add("oculto");
    areaPrincipalDiv.classList.remove("segundo-plano");
});

continueYahooButton.addEventListener('click', () => {   
    window.location.replace("https://login.yahoo.com/");
});
