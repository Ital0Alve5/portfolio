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
        const mee = document.querySelector('.sobreMim img')
        const raiosLamp = document.querySelectorAll('.str0')
        if(!flag){
            if(window.innerWidth < 500){
                for(let raio of raiosLamp){
                    raio.style.stroke = 'var(--azulClaro)'
                }
                mee.setAttribute('src', './img/meeClaro.svg')
                document.documentElement.classList.toggle('darkmode')
                return
            }
            for(let raio of raiosLamp){
                raio.style.stroke = 'var(--abasColor)'
            }
                mee.setAttribute('src', './img/meeClaro.svg')
                document.documentElement.classList.toggle('darkmode')
                return
            }
            for(let raio of raiosLamp){
                raio.style.stroke = 'transparent'
            }
            document.documentElement.classList.toggle('darkmode')
            mee.setAttribute('src', './img/mee.svg')

    }

    PT_EN = (flag)=>{this.language.childNodes[1].innerHTML = flag}

}

const menu = new Menu()
const checkbox = document.querySelector('#checkboxMenu')

menu.botão.addEventListener('click', ()=>{menu.abrir(checkbox.checked)})

menu.lamp.addEventListener('click', ()=>{
    const raiosLamp = document.querySelector('.str0')
    if(window.getComputedStyle(raiosLamp).stroke == 'rgba(0, 0, 0, 0)'){
        menu.ON_OFF(false)
        return
    }
    menu.ON_OFF(true)
})

menu.language.addEventListener('click', ()=>{
    if(menu.language.childNodes[1].innerHTML == 'PT'){
        menu.PT_EN('EN')
        i18next.changeLanguage('en')
        return
    }
    menu.PT_EN('PT')
    i18next.changeLanguage('pt')

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
    e.addEventListener('click', (e)=>{
        const element = document.querySelector(`.${href}`)
        const scrollarPara = element.offsetTop
        if(window.innerWidth<500){
            window.scrollTo({behavior: 'smooth', top: scrollarPara, left: 0})
            return
        }
        window.scrollTo({behavior: 'smooth', top: scrollarPara-200, left: 0})
    })
})
const languageP = document.querySelector('.language p')
const language = document.querySelector('.language')
language.addEventListener('click', ()=>{
    window.localStorage.setItem('lang', languageP.innerHTML)
})
window.onload = ()=>{
    if(localStorage.getItem('lang') == 'EN'){
        language.click()
    }
}