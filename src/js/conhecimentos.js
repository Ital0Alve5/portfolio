document.addEventListener('DOMContentLoaded', ()=>{
    const galeria = document.querySelector('.galeria')
    let itens = document.querySelectorAll('.item')
    const next = document.querySelector('.gallery__next')
    const prev = document.querySelector('.gallery__prev')
    const miniaturas = document.querySelector('.miniaturas')
    const mini = document.querySelectorAll('.mini')
    let intervalo = setInterval(() => {
      next.click()
    }, 4000);
  
    next.addEventListener('click', ()=>{
      
      mini.forEach((m)=>{
        m.classList.remove('focus')
      })
      const miniDestaque =  document.querySelector(`.${itens[3].classList[1].replace('c', 'm')}`)
      miniDestaque.classList.add('focus')
      galeria.appendChild(itens[0])
      itens = document.querySelectorAll('.item')
    })
  
    prev.addEventListener('click', ()=>{
      mini.forEach((m)=>{
        m.classList.remove('focus')
      })
      const miniDestaque =  document.querySelector(`.${itens[1].classList[1].replace('c', 'm')}`)
      miniDestaque.classList.add('focus')
      galeria.insertBefore(itens[itens.length-1], itens[0])
      itens = document.querySelectorAll('.item')
    })
  
  mini.forEach((m)=>{
    m.addEventListener('click', (e)=>{
      clearInterval(intervalo)
      intervalo = setInterval(() => {
        next.click()
      }, 4000);
      const ordemSelecionada = e.target.classList[0].replace('m', '')
      const certfiSelecionado = document.querySelector(`.${e.target.classList[0].replace('m', 'c')}`)
      const certificadoCentral =  itens[2].classList[1].replace('c', '')
      if(ordemSelecionada-certificadoCentral> 0){
        for(let i = 0; i < ordemSelecionada - certificadoCentral; i++){
          next.click()
        }
      }
      else{
        for(let i = 0; i < Math.abs(ordemSelecionada - certificadoCentral); i++){
          prev.click()
        }
      }
    })
    
  })
  })