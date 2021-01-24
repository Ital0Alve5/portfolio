const primeiro = document.querySelector('.primeiroSpan')
const segundo = document.querySelector('.segundoSpan')
const terceiro = document.querySelector('.terceiroSpan')
const psobreMim = document.querySelector('.p div')
const sobremim = document.querySelector('.p')
document.addEventListener('scroll', ()=>{
    if(window.innerWidth > 1000){
        if(window.scrollY > (window.innerWidth/5)){
            primeiro.classList.add('none')
            segundo.classList.add('none')
            terceiro.classList.add('none')
            psobreMim.classList.remove('estrofeNone')
        }
        return
    }
    if(window.scrollY > (window.innerWidth/6) && window.innerWidth>400){
        primeiro.classList.add('none')
        segundo.classList.add('none')
        terceiro.classList.add('none')
        psobreMim.classList.remove('estrofeNone')
    }
    if(window.innerWidth < 400){
        if(window.scrollY > (window.innerWidth/2.5)){
            primeiro.classList.add('none')
            segundo.classList.add('none')
            terceiro.classList.add('none')
            psobreMim.classList.remove('estrofeNone')
    }
}
})

