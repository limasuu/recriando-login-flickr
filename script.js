const emailInput= document.querySelector("#email");
const descEmailLabel= document.querySelector("#descricao-email");


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
        
    }
});

