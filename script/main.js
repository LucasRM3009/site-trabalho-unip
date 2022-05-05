'use strict'

function esconderConteudo() {
    cabecalhoPrincipal.style.display = 'none';
    conteudoPrincipal.style.display = 'none';
    rodapePrincipal.style.display = 'none';
}

function exibirConteudo() {
    cabecalhoPrincipal.style.display = 'block';
    conteudoPrincipal.style.display = 'block';
    rodapePrincipal.style.display = 'block';
}

function callbackFunctionButton (ms_exibirConteudo, numberVisible, ms_visibleTimeout, ms_visible, numberAnimationMove, ms_animationMove) {
    setTimeout(exibirConteudo, ms_exibirConteudo)
    setTimeout(() => {visible[numberVisible].classList.toggle('visible')}, ms_visibleTimeout)
    visible[numberVisible].style.animation = `${ms_visible}ms linear fadeOut`
    animationMove[numberAnimationMove].style.animation = `${ms_animationMove}ms linear moveOut-section`
}

const cabecalhoPrincipal = document.querySelector('.cabecalhoPrincipal')
const conteudoPrincipal = document.querySelector('.conteudoPrincipal')
const rodapePrincipal = document.querySelector('.rodapePrincipal')

const linkObjetivo = document.querySelector('#linkObjetivo')
const linkDissertacao = document.querySelector('#linkDissertacao')
const botaoFechar = document.querySelectorAll('#botaoFechar')
const animationMove = document.querySelectorAll('#animationMove')
const visible = document.querySelectorAll('.visible')

linkObjetivo.addEventListener('click', () => {
    esconderConteudo()
    document.title = 'Inclusão Digital | Objetivo do Trabalho'
    visible[1].classList.toggle('visible')
    visible[1].style.animation = '300ms linear fadeIn';
    animationMove[0].style.animation = '800ms linear moveIn-section';

    botaoFechar[0].onclick = () => callbackFunctionButton(200, 1, 250, 300, 0, 400)
})

linkDissertacao.addEventListener('click', () => {
    esconderConteudo() 
    document.title = 'Inclusão Digital | Dissertação'   
    visible[2].classList.toggle('visible')
    visible[2].style.animation = '800ms linear fadeIn';
    animationMove[1].style.animation = '1500ms linear moveIn-section';
    
    botaoFechar[1].onclick = () => callbackFunctionButton(1100, 2, 1150, 1200, 1, 1300)
})

const switcher = document.querySelector('#iconeMudaCor')
const sol = document.querySelector('.fa-sun')
const lua = document.querySelector('.fa-moon')

let theme = localStorage.getItem('theme') || 'light-theme'

switcher.onclick = () => {
    document.body.style.animation = '1s linear fadeIn';
    if (theme === 'light-theme') {
        sol.style.animation = '500ms linear fadeIn';
        
        localStorage.setItem('theme', 'dark-theme')
    } else {
        lua.style.animation = '500ms linear fadeIn';   
        
        localStorage.setItem('theme', 'light-theme')
    }
    
    mudaTema() 
}

document.body.style.animation = '';

function mudaTema() {
    theme = localStorage.getItem('theme')
    if(theme === 'light-theme') {
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')

        sol.style.display = 'block';
        lua.style.display = 'none';
    } else {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')

        sol.style.display = 'none';
        lua.style.display = 'block';
    }
}

mudaTema()