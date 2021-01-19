window.addEventListener('scroll', ()=>{
    const sobreMim = document.querySelector('.sobreMim')
    const f1 = document.querySelector('.f1')
    const f2 = document.querySelector('.f2')
    if(scrollY > (sobreMim.offsetTop/4)*1.5){
        f1.style.left = '25%'
        f1.style.transform = 'translateX(-45%)'
        f1.style.opacity = 1
        f2.style.right = '25%'
        f2.style.transform = 'translateX(45%)'
        f2.style.opacity = 1
    }
    else{
        f1.style.left = ''
        f1.style.transform = ''
        f1.style.opacity = 0
        f2.style.right = ''
        f2.style.transform = ''
        f2.style.opacity = 0
    }
})