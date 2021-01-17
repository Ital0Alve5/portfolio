class Menu{
    constructor(){
        this.checkbox = document.querySelector('#checkboxMenu')
        this.fundo = document.querySelector('.fundo')
        this.menu = document.querySelector('.menu')
        this.botão = document.querySelector('.expand')
        this.arrow = document.querySelector('.expand span')
        this.lamp = document.querySelector('.lamp')
        this.language = document.querySelector('.language')
    }
    abrir = (flag)=>{
        if(window.innerWidth > 801){
            if(!flag){
                this.menu.style.backgroundColor = '#bfcae06b'
                this.menu.style.width = '200px'
                this.arrow.classList.add('expandLeft')
                this.arrow.classList.remove('arrow')
                return
            }
            this.menu.style.backgroundColor = '#bfcae06b'
            this.menu.style.width = '45px'
            this.arrow.classList.remove('expandLeft')
            this.arrow.classList.add('arrow')
        }
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

    PT_EN = (flag)=>{
        this.language.childNodes[1].innerHTML = flag
    }

    menuM = (flag)=>{
        let a = 0
        if(!flag){
            this.menu.style.width = '100%'
            this.menu.style.backgroundColor = 'transparent'
            if(a > 0){
                this.escurecer(flag)
                return
            }
            a++
            return
        }
        this.abrir(true)
    }

    escurecer = (flag)=>{
        if(innerWidth < 801){
            if(flag){
                this.fundo.style.filter = 'blur(0px)'
                this.menu.style.backgroundColor = 'transparent'
                return
            }
            this.fundo.style.filter = 'blur(3px)'
            this.menu.style.backgroundColor = 'rgba(0, 0, 0, 0.227)'
            return
        }
    }

}
const menu = new Menu()

menu.botão.addEventListener('click', open)
function open(){
    if(window.getComputedStyle(menu.menu).width == '45px'){
        menu.abrir(false)
        return
    }
    menu.abrir(true)
}

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


function verify(){
    if(document.innerWidth < 801 || window.innerWidth < 801){
        menu.menuM(menu.checkbox.checked)
        return
    }
    menu.menuM(true)
}

window.addEventListener('resize', verify)
window.addEventListener('load', verify)
document.querySelector('.menu label').addEventListener('click', ()=>{
    menu.escurecer(menu.checkbox.checked)
})

        window.addEventListener('click', (e)=>{
        if(e.target.classList.contains('M')){
            return
        }
        else{menu.escurecer(true); menu.checkbox.checked = false}
        })

 
/* class Menu{
    constructor(){
        this.checkbox = document.querySelector('#checkboxMenu')
        this.fundo = document.querySelector('.fundo')
        this.menu = document.querySelector('.menu')
        this.botão = document.querySelector('.expand')
        this.arrow = document.querySelector('.expand span')
        this.lamp = document.querySelector('.lamp')
        this.language = document.querySelector('.language')
    }
    abrir = (flag)=>{
        if(window.innerWidth > 801){
            if(!flag){
                this.menu.style.backgroundColor = '#bfcae06b'
                this.menu.style.width = '200px'
                this.arrow.classList.add('expandLeft')
                this.arrow.classList.remove('arrow')
                return
            }
            this.menu.style.backgroundColor = '#bfcae06b'
            this.menu.style.width = '45px'
            this.arrow.classList.remove('expandLeft')
            this.arrow.classList.add('arrow')
        }
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

    PT_EN = (flag)=>{
        this.language.childNodes[1].innerHTML = flag
    }

    menuM = (flag)=>{
        let a = 0
        if(!flag){
            this.menu.style.width = '100%'
            this.menu.style.backgroundColor = 'transparent'
            if(a > 0){
                this.escurecer(flag)
                return
            }
            a++
            return
        }
        this.abrir(true)
    }

    escurecer = (flag)=>{
        if(innerWidth < 801){
            if(flag){
                this.fundo.style.filter = 'blur(0px)'
                this.menu.style.backgroundColor = 'transparent'
                return
            }
            this.fundo.style.filter = 'blur(3px)'
            this.menu.style.backgroundColor = 'rgba(0, 0, 0, 0.227)'
            return
        }
    }

}
const menu = new Menu()

menu.botão.addEventListener('click', open)
function open(){
    if(window.getComputedStyle(menu.menu).width == '45px'){
        menu.abrir(false)
        return
    }
    menu.abrir(true)
}

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


function verify(){
    if(document.innerWidth < 801 || window.innerWidth < 801){
        menu.menuM(menu.checkbox.checked)
        console.log()
        return
    }
    menu.menuM(true)
}

window.addEventListener('resize', verify)
window.addEventListener('load', verify)
document.querySelector('.menu label').addEventListener('click', ()=>{
    menu.escurecer(menu.checkbox.checked)
})
 */