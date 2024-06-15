let cabecalho = document.querySelector(".cabecalho")
let altura = (window.innerHeight-115)
setInterval(function alterandocabecalho(){   
    if (scrollY > 0){
        cabecalho.classList.add('cabecalhoScrolado')
    }else{
        cabecalho.classList.remove('cabecalhoScrolado') 
    }
}, 0)