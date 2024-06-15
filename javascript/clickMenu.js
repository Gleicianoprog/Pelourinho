let botaoMenu = document.querySelector('.menu-cell')
let inicio = document.querySelector('#inicio')
let menu = document.createElement('div')
let listaMenu = document.createElement('nav')
let sobre = document.createElement('a')
let restaurante = document.createElement('a')
let bangalos = document.createElement('a')
let contato = document.createElement('a')
sobre.href = '#subtitulo1'
restaurante.href = '#subtitulo2'
bangalos.href = '#subtitulo3'
contato.href = '#contato'
listaMenu.appendChild(sobre)
listaMenu.appendChild(restaurante)
listaMenu.appendChild(bangalos)
listaMenu.appendChild(contato)
menu.appendChild(listaMenu)
inicio.appendChild(menu)
let menuAberto = false
botaoMenu.addEventListener("click" ,()=>{
    if(!menuAberto){
        listaMenu.classList.remove('linksMenuFechado')
        listaMenu.classList.add('linksMenu')
        menu.classList.remove('menuFechado')
        menu.classList.add('menuAberto')
        document.querySelector('.menu-cell').textContent = '✘'
        sobre.innerHTML = '<img src=/assets/informacoes-icone.png alt=icone sobre class=icones-menu><span> Sobre</span>'
        restaurante.innerHTML = '<img src=/assets/restaurante-icone.png alt=icone restaurante class=icones-menu><span> Restaurante</span>'
        bangalos.innerHTML ='<img src=/assets/home-icone.png alt=icone bangalôs class=icones-menu><span> Bangalôs</span>'
        contato.innerHTML = '<img src=/assets/contato-icone.png alt=icone contato class=icones-menu><span> Contato</span>'
        menuAberto = true
    }else{
        document.querySelector('.menu-cell').textContent = '☰'
        menu.classList.remove('menuAberto')
        menu.classList.add('menuFechado')
        menuAberto = false
    }
})
listaMenu.addEventListener("click" , ()=>{
    menu.classList.remove('menuAberto')
    menu.classList.add('menuFechado')
    document.querySelector('.menu-cell').textContent = '☰'
    menuAberto = false
})