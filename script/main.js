const botaoFechar = document.querySelector('#botaoFechar')
const linkAbout = document.querySelector('#linkAbout')
const animationMove = document.querySelector('#animationMove')
const section_ObjetivoDoTrabalho = document.querySelector('.about-objetivoDoTrabalho')
const cabecalhoPrincipal = document.querySelector('.cabecalhoPrincipal')

linkAbout.addEventListener('click', () => {
    cabecalhoPrincipal.style.position = 'relative'
    section_ObjetivoDoTrabalho.classList.toggle('visible')
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeIn";
    animationMove.style.animation = "800ms linear moveIn-section";
})

botaoFechar.addEventListener('click', () => {
    setTimeout("section_ObjetivoDoTrabalho.classList.toggle('visible')", 250)
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeOut";
    animationMove.style.animation = "400ms linear moveOut-section";
})
