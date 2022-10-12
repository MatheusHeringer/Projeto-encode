selecione = document.querySelector("#sel");
botao=document.querySelector('#btn')
codificar = document.querySelector("#codificar");
decodificar = document.querySelector("#decodificar");

/*base64*/

function base64() {
 msg=document.form.mensagem.value
  
  if (codificar.checked) {
    var codificado = btoa(msg);
    document.form.resultado.value=codificado
  } 
  else if (decodificar.checked) {
    var decodificado = atob(msg);
   document.form.resultado.value=decodificado
  }
}


//cifra de cesar
var letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cifraCesar() {
  if (codificar.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    chave = parseInt(document.form.incremento.value)
    x = parseInt(chave)
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []

    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j]) {
            crip[i] = letras[(j + x1) % letras.length]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }
  else if (decodificar.checked) {
    msg = document.form.mensagem.value.toLowerCase()
    chave = parseInt(document.form.incremento.value)
    x = parseInt(chave)
    casas=letras.length
    if(x<0){
      x1=x*(-1)
    }
    else{
      x1=x
    }
    crip = []
    
    for (i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') {
        for (j = 0; j < letras.length; j++) {
          if (msg[i] == letras[j] && (j-x)>=0) {
            crip[i] = letras[(j - x1) % letras.length]
            break
          }
          else if((msg[i] == letras[j] && (j-x)<0)) {
            crip[i] = letras[((j - x) % letras.length)+parseInt(casas)]
            break
          }
        }
      }
      else {
        crip[i] = ' '
      }
    }
    document.form.resultado.value=crip.join('')
  }

}

incremento=document.querySelector('.incremento')
selecione.addEventListener('click',function(){
  if (selecione.value=='cifrad'){
    incremento.style.display='block';
  }
  else{
    incremento.style.display='none';
  }
})

//trocar o nome do botao

codificar.addEventListener('click', function(){
  if(decodificar.checked){
    botao.innerText='Decodificar Mensagem'
  }
  else{
    botao.innerText='Codificar Mensagem!'
  }
})

decodificar.addEventListener('click', function(){
  if(decodificar.checked){
    botao.innerText='Decodificar Mensagem!'
  }
  else{
    botao.innerText='Codificar Mensagem!'
  }
})

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") { 
   resultado.innerText = base64();
  } 
  else if (selecione.value === "cifrad") {
    resultado.innerText = cifraCesar();
  }
});


/*

botao.onclick=function(){
    msg=document.form.mensagem.value
    criptografada=btoa(msg)
    document.form.resultado.value=criptografada
}
*/

/*
botao=document.querySelector('#btn')
botao.onclick=function(){
    checar=document.form.mensagem.value
    tamanho=checar.length
    ascii=[]

    for(i=0; i<tamanho; i++){
        ascii.push(checar.charCodeAt(i))
    }
    document.form.resultado.value=ascii
}

*/

/*



radd.onclick=function(){
    frase=document.form.mensagem.value
    codificado=btoa(frase)
    document.form.resultado.value=codificado
}

rad=document.querySelector('#cifra')
rad.onclick=function(){
resposta=atob(codificado)
document.form.resultado.value=resposta
}
// código pra base 64

// cria uma variavel qualquer
nome='matheus'
//criptografia
//cria uma outra variavel
codigo=btoa(nome)
console.log(codigo)

//descriptografando
resposta=atob(codigo)
console.log(resposta)

*/