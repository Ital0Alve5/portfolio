window.addEventListener('scroll', ()=>{
const div = document.querySelector('.contato')
if(window.innerWidth > 500){
        if(div.getBoundingClientRect().top < innerHeight-((24*innerHeight)/100)+100){
        new Promise((res)=>{
        div.style.marginLeft = '50%'
        div.style.transform = 'translateX(-50%)'
        res()
     })
     .then(()=>{
          const intervalo = setInterval(()=>{
              if(div.getBoundingClientRect().x > window.innerWidth/3){
                  div.style.height = '39vw'
                  clearInterval(intervalo)
                }
            })
        })
    }
}
else{
    if(div.getBoundingClientRect().top <  innerHeight-((24*innerHeight)/100)+100){
        new Promise((res)=>{
        div.style.marginLeft = '50%'
        div.style.transform = 'translateX(-50%)'
        res()
     })
     .then(()=>{
          const intervalo = setInterval(()=>{
                  div.style.height = '100%'
                  div.style.width = '100%'
                  clearInterval(intervalo)
            })
        })
    }
}
})
