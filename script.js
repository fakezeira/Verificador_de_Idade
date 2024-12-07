function verificar(){
    //valor dos inputs feitos pelo usuario
    let ano = parseInt(document.getElementById('txtano').value);
    const sexoM = document.getElementById('mas');
    const sexoF = document.getElementById('fem');

    //tempo
    let agora = new Date(); //tempo atual
    let anoAtual = agora.getFullYear(); //ano atual

    let idade = anoAtual - ano; //conta idade
    
    //resposta do sistema
    let reSpan = document.getElementById('reSpan');//texto de resposta

    let imgRes = document.getElementById('imgRes');//imagem de resposta

    //condição para criança
    if (idade <= 13){
        if (sexoM.checked){
            reSpan.innerHTML = `Detectamos uma criança do sexo masculino com ${idade} anos`
            imgRes.src = "imgs/h/criancaH.jpg"
        }
        else{
            reSpan.innerHTML = `Detectamos uma criança do sexo feminino com ${idade} anos`
            imgRes.src = "imgs/f/criancaF.jpg"
        }
    }

    //condição para jovem
    if(idade >= 14){
        if(sexoM.checked){
            reSpan.innerHTML = `Detectamos um jovem com ${idade} anos`
            imgRes.src = "imgs/h/jovemH.jpeg"
        }
        else{
            reSpan.innerHTML = `Detectamos uma jovem com ${idade} anos`
            imgRes.src = "imgs/f/jovemF.jpg"
        }
    }

    //condição para adulto
    if(idade >= 18){
        if(sexoM.checked){
            reSpan.innerHTML = `Detectamos um adulto com ${idade} anos`
            imgRes.src = "imgs/h/adultoH.jpg"
        }
        else{
            reSpan.innerHTML = `Detectamos uma adulta com ${idade} anos`
            imgRes.src = "imgs/f/adultoF.jpeg"
        }
    }
}
verificar()