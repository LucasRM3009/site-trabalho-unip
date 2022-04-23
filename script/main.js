const cabecalhoPrincipal = document.querySelector('.cabecalhoPrincipal')
const conteudoPrincipal = document.querySelector('.conteudoPrincipal')
const rodapePrincipal = document.querySelector('.rodapePrincipal')

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

const botaoFechar = document.querySelector('#botaoFechar')
const linkAbout = document.querySelector('#linkAbout')
const animationMove = document.querySelector('#animationMove')
const section_ObjetivoDoTrabalho = document.querySelector('.about-objetivoDoTrabalho')

linkAbout.addEventListener('click', () => {
    esconderConteudo()
    section_ObjetivoDoTrabalho.classList.toggle('visible')
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeIn";
    animationMove.style.animation = "800ms linear moveIn-section";
})

botaoFechar.addEventListener('click', () => {
    exibirConteudo()
    setTimeout("section_ObjetivoDoTrabalho.classList.toggle('visible')", 250)
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeOut";
    animationMove.style.animation = "400ms linear moveOut-section";
})



