'use strict'

function esconderConteudo() {
    cabecalhoPrincipal.style.display = 'none'
    conteudoPrincipal.style.display = 'none'
    rodapePrincipal.style.display = 'none'
}

function exibirConteudo() {
    cabecalhoPrincipal.style.display = 'block'
    conteudoPrincipal.style.display = 'block'
    rodapePrincipal.style.display = 'block'
}

function mudaTitle(title) {document.title = `${title}`}

function callbackFunctionButton (pageTitle, ms_exibirConteudo, numberVisible, ms_visibleTimeout, ms_visible, numberAnimationMove, ms_animationMove) {
    mudaTitle(pageTitle)
    setTimeout(exibirConteudo, ms_exibirConteudo)
    setTimeout(() => {visible[numberVisible].classList.toggle('visible')}, ms_visibleTimeout)
    visible[numberVisible].style.animation = `${ms_visible}ms linear fadeOut`
    animationMove[numberAnimationMove].style.animation = `${ms_animationMove}ms linear moveOut-section`
}

function mudaTema() {
    const sol = document.querySelector('.fa-sun')
    const lua = document.querySelector('.fa-moon')
    theme = localStorage.getItem('theme') || 'light-theme'

    if(theme === 'light-theme') {
        sol.style.animation = '500ms linear fadeIn'

        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')

        sol.style.display = 'block'
        lua.style.display = 'none'
    } else {
        lua.style.animation = '500ms linear fadeIn' 

        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')

        lua.style.display = 'block'
        sol.style.display = 'none'
    }
}

function exibirSecaoObjetivoEDissetacao(numberVisible, ms_visible, numberAnimationMove, ms_animationMove) {
    visible[numberVisible].classList.toggle('visible')
    visible[numberVisible].style.animation = `${ms_visible}ms linear fadeIn`
    animationMove[numberAnimationMove].style.animation = `${ms_animationMove}ms linear moveIn-section`
}

function exibirSecaoObjetivo() {
    esconderConteudo()
    mudaTitle('Inclusão Digital | Objetivo do Trabalho')
    exibirSecaoObjetivoEDissetacao(1, 300, 0, 800)
    botaoFechar[0].onclick = () => callbackFunctionButton(title, 200, 1, 250, 300, 0, 400)
}

function exibirSecaoDissertacao() {
    esconderConteudo() 
    mudaTitle('Inclusão Digital | Dissertação')
    exibirSecaoObjetivoEDissetacao(2, 800, 1, 1500)    
    botaoFechar[1].onclick = () => callbackFunctionButton(title, 1100, 2, 1150, 1200, 1, 1300)
}

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const cabecalhoPrincipalNav = document.querySelector('.cabecalhoPrincipal-nav')
    const icone = document.querySelector('.fas')
    cabecalhoPrincipalNav.classList.toggle('active')
    cabecalhoPrincipal.classList.toggle('cabecalhoPrincipal-bg')
    icone.classList.toggle('fa-solid')
    icone.classList.toggle('fa-xmark')

    const active = cabecalhoPrincipalNav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
}

const cabecalhoPrincipal = document.querySelector('.cabecalhoPrincipal')
const conteudoPrincipal = document.querySelector('.conteudoPrincipal')
const rodapePrincipal = document.querySelector('.rodapePrincipal')

const linkObjetivo = document.querySelector('#linkObjetivo')
const linkDissertacao = document.querySelector('#linkDissertacao')
const botaoFechar = document.querySelectorAll('#botaoFechar')
const animationMove = document.querySelectorAll('#animationMove')
const visible = document.querySelectorAll('.visible')
let title = document.title

const mobileMenu = document.querySelector('#mobile-menu')
const pesquisa = document.querySelector('#pesquisa')

mobileMenu.addEventListener('click', toggleMenu)
pesquisa.addEventListener('click', toggleMenu)
mobileMenu.addEventListener('touchstart', toggleMenu)
linkObjetivo.addEventListener('click', exibirSecaoObjetivo)
linkDissertacao.addEventListener('click', exibirSecaoDissertacao)

const switcher = document.querySelector('#iconeMudaCor')
let theme = localStorage.getItem('theme') || 'light-theme'

switcher.onclick = () => {
    document.body.style.animation = '2s linear fadeIn'

    if (theme === 'light-theme') { localStorage.setItem('theme', 'dark-theme') } 
    else { localStorage.setItem('theme', 'light-theme') }
    
    mudaTema()
}
mudaTema()
