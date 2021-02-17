class Galeria{
  constructor(){
    this.galeria = document.querySelector('.galeria')
    this.itens = document.querySelectorAll('.item')
    this.next = document.querySelector('.gallery__next')
    this.prev = document.querySelector('.gallery__prev')
    this.mini = document.querySelectorAll('.mini')
    this.intervalo = setInterval(()=>{this.swipeRight()}, 4000)
    this.inicialTouch = null
    this.finalTouch = null
  } 
    swipeRight = ()=>{      
        this.mini.forEach((m)=>{m.classList.remove('focus')})
        const miniDestaque =  document.querySelector(`.${this.itens[3].classList[1].replace('c', 'm')}`)
        miniDestaque.classList.add('focus')
        this.galeria.appendChild(this.itens[0])
        this.itens = document.querySelectorAll('.item')
    }

    swipeLeft = ()=>{
        this.mini.forEach((m)=>{m.classList.remove('focus')})
        const miniDestaque =  document.querySelector(`.${this.itens[1].classList[1].replace('c', 'm')}`)
        miniDestaque.classList.add('focus')
        this.galeria.insertBefore(this.itens[this.itens.length-1], this.itens[0])
        this.itens = document.querySelectorAll('.item')
    }

    clickMiniaturas = (e)=>{
          clearInterval(this.intervalo)
          this.intervalo = setInterval(() => {this.swipeRight()}, 4000)
          const ordemSelecionada = e.target.classList[0].replace('m', '')
          const certfiSelecionado = document.querySelector(`.${e.target.classList[0].replace('m', 'c')}`)
          const certificadoCentral =  this.itens[2].classList[1].replace('c', '')
          if(ordemSelecionada-certificadoCentral> 0){
            for(let i = 0; i < ordemSelecionada - certificadoCentral; i++){this.swipeRight()}
            return
          }
            for(let i = 0; i < Math.abs(ordemSelecionada - certificadoCentral); i++){this.swipeLeft()}  
    }

    swipeDirection = ()=>{
        const swipeOffset = this.inicialTouch-this.finalTouch
        if(swipeOffset > 0 && swipeOffset > 80){
          clearInterval(this.intervalo)
          this.swipeRight()
          this.intervalo = setInterval(()=>{this.swipeRight()}, 4000)
        }
        else if(swipeOffset < 0 && swipeOffset < -80){
          clearInterval(this.intervalo)
          this.swipeLeft()
          this.intervalo = setInterval(()=>{this.swipeRight()}, 4000)
        }
    }

}

const galeria = new Galeria()

galeria.next.addEventListener('click', ()=>{galeria.swipeRight()})

galeria.prev.addEventListener('click', ()=>{galeria.swipeLeft()})

galeria.mini.forEach((m)=>{m.addEventListener('click', galeria.clickMiniaturas)})

galeria.galeria.addEventListener('touchstart', (e)=>{galeria.inicialTouch = e.touches[0].screenX})

galeria.galeria.addEventListener('touchend', (e)=>{
  galeria.finalTouch = e.changedTouches[0].screenX
  galeria.swipeDirection()
})



