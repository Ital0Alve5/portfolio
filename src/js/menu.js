class Menu{
    constructor(){
        this.menu = document.querySelector('.menu')
        this.botão = document.querySelector('.expand')
        this.arrow = document.querySelector('.expand span')
        this.lamp = document.querySelector('.lamp')
        this.language = document.querySelector('.language')
        this.película = document.querySelector('.películaTransparente')
    }

    abrir = (flag)=>{
        if(!flag){
            this.menu.classList.toggle('menuOpen')
            this.arrow.classList.toggle('arrowLeft')
            this.película.classList.toggle('películaEscura')
            return
        }
        this.menu.classList.toggle('menuOpen')
        this.arrow.classList.toggle('arrowLeft')
        this.película.classList.toggle('películaEscura')
    }

    ON_OFF = (flag)=>{
        const on = '.str0 {stroke: rgb(30, 52, 95);stroke-width:1270;stroke-miterlimit:22.9256}.fil0 {fill: rgb(30, 52, 95);fill-rule:nonzero}'
        const style = document.createElement('style')
        style.innerHTML = on
        if(!flag){
            menu.lamp.childNodes[1].removeChild(menu.lamp.childNodes[1].childNodes[1])
            return
        }
        menu.lamp.childNodes[1].insertBefore(style, menu.lamp.childNodes[1].childNodes[1])
    }

    PT_EN = (flag)=>{this.language.childNodes[1].innerHTML = flag}

}

const menu = new Menu()
const checkbox = document.querySelector('#checkboxMenu')

menu.botão.addEventListener('click', ()=>{menu.abrir(checkbox.checked)})

menu.lamp.addEventListener('click', ()=>{
    if(menu.lamp.childNodes[1].childNodes[1].nodeName.toLocaleLowerCase() == 'style'){
        menu.ON_OFF(false)
        return
    }
    menu.ON_OFF(true)
})

menu.language.addEventListener('click', ()=>{
    if(menu.language.childNodes[1].innerHTML == 'PT'){
        menu.PT_EN('EN')
        return
    }
    menu.PT_EN('PT')
})

window.addEventListener('click', (e)=>{
    if(window.innerWidth < 500){
        if(e.target.classList.contains('M') ||
        e.target.classList.contains('expand') ||
        e.target.classList.contains('gallery__next') ||
        e.target.classList.contains('gallery__prev')){return}
        if(!(checkbox.checked)){menu.abrir(checkbox.checked)}
        menu.película.classList.remove('películaEscura')
        checkbox.checked = false
    }
})


const sessõesA = document.querySelectorAll('.sessões a')
sessõesA.forEach((e)=>{
    const href = e.getAttribute('href').replace('#', '')
    console.log(href)
    e.addEventListener('click', (e)=>{
        if(href == 'sobreMim' && window.innerWidth>500){
            const scrollarPara = document.querySelector(`.${href}`).offsetTop
            window.scrollTo({behavior: 'smooth', top: scrollarPara+450, left: 0})
            return
        }
        const scrollarPara = document.querySelector(`.${href}`).offsetTop
        window.scrollTo({behavior: 'smooth', top: scrollarPara-70, left: 0})
    })
})

