const botaoFechar = document.querySelector('#botaoFechar')
const linkAbout = document.querySelector('#linkAbout')
const section_ObjetivoDoTrabalho = document.querySelector('.about-objetivoDoTrabalho')
const animationMove = document.querySelector('#animationMove')

linkAbout.addEventListener('click', () => {
    section_ObjetivoDoTrabalho.classList.toggle('visible')
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeIn";
    animationMove.style.animation = "800ms linear moveIn-section";
})

botaoFechar.addEventListener('click', () => {
    setTimeout("section_ObjetivoDoTrabalho.classList.toggle('visible')", 250)
    section_ObjetivoDoTrabalho.style.animation = "300ms linear fadeOut";
    animationMove.style.animation = "400ms linear moveOut-section";
})
