const btn = document.querySelector('.checkboxBtn')
const contatoForm = document.querySelector('.contato form')
const btnMais = document.querySelector('.btn_mais')
const faPlus = document.querySelector('.fa-plus')
const div = document.querySelector('.contato')
const lamp = document.querySelector('.lamp')
const raiosLamp = document.querySelectorAll('.str0')

document.addEventListener('click', (e)=>{
if(e.target.classList.contains('checkboxBtn') || e.target.classList.contains('fa-plus')){
    if(btn.checked){btn.checked = false; return}
    btn.checked = true
    return
}
else if(e.target.classList.contains('btnM') !== true){btn.checked = false}
})

window.onscroll = ()=>{
    if(window.innerWidth < 500){
        if(div.getBoundingClientRect().top <  innerHeight-((24*innerHeight)/100)+100){
            btnMais.classList.remove('btn_mais2')
            faPlus.classList.remove('fa-plus2')
            lamp.classList.remove('lamp2')
            language.classList.remove('language2')
            btnMais.classList.add('btn_mais1')
            faPlus.classList.add('fa-plus1')
            lamp.classList.add('lamp1')
            language.classList.add('language1')

        }
        else{
            btnMais.classList.remove('btn_mais1')
            faPlus.classList.remove('fa-plus1')
            lamp.classList.remove('lamp1')
            language.classList.remove('language1')
            btnMais.classList.add('btn_mais2')
            faPlus.classList.add('fa-plus2')
            lamp.classList.add('lamp2')
            language.classList.add('language2')
        }
    }
}
