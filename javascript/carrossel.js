function animarCarrossel(classe , Arrayimagens, idBotaoEsquerdo, idBotaoDireito){
    let div = document.querySelector(`.${classe}`)
    for(let i = 0 ;  i<Arrayimagens.length ; i++){
        let imagem = document.createElement('img')
        imagem.src = Arrayimagens[i]
        imagem.style.left = `${(100)*(i+1)}%`
        imagem.loading = 'lazy'
        imagem.classList.add(`${classe}`)
        div.parentNode.appendChild(imagem)
        if(classe == 'carrossel-restaurante'){
            imagem.alt = 'imagem restaurante'
        }else{
            imagem.alt = 'imagem bângalo'
        }
    }
    let botaoEsquerdo = document.querySelector(`#${idBotaoEsquerdo}`)
    let botaoDireito = document.querySelector(`#${idBotaoDireito}`)
    let imagensCarrossel =  document.querySelectorAll(`.${classe}`)
    botaoEsquerdo.addEventListener("click",()=>{
        if (imagensCarrossel[0].style.left.split("%")[0] >= 0){
            for(let k = 0 ; k<imagensCarrossel.length ;k++ ){
                imagensCarrossel[k].style.left = `${k*100 -(100*(imagensCarrossel.length-1))}%`
            }
        }else{
            imagensCarrossel.forEach(element  =>{
                let distanciaEsquerda = Number(element.style.left.split("%")[0])
                distanciaEsquerda = distanciaEsquerda + 100
                element.style.left = `${distanciaEsquerda}%`
            })
        }

        })
    botaoDireito.addEventListener("click",()=>{
        if(imagensCarrossel[imagensCarrossel.length - 1].style.left.split("%")[0] <= 0){
            for(let k = 0 ; k<imagensCarrossel.length ;k++ ){
                imagensCarrossel[k].style.left = `${k*100}%`
            }
        }else{
            imagensCarrossel.forEach(element =>{
                let distanciaEsquerda = Number(element.style.left.split("%")[0])
                distanciaEsquerda = distanciaEsquerda - 100
                element.style.left = `${distanciaEsquerda}%`
            })
        }
    })
}
animarCarrossel('carrossel-restaurante' , ['/assets/fundo-restaurante1.jpeg' , '/assets/fundo-restaurante2.jpeg', '/assets/fundo-restaurante3.jpeg' , '/assets/drink-restaurante.jpeg'] , 'botaoEsquerdoRestaurante', 'botaoDireitoRestaurante')
animarCarrossel('carrossel-bangalos' , ['/assets/bangalos1.jpeg' , '/assets/bangalos2.jpeg' ]  , 'botaoEsquerdoBangalos' , 'botaoDireitoBangalos')