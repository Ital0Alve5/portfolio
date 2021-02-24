const btn = document.querySelector('.checkboxBtn')
const contatoForm = document.querySelector('.contato form')
document.addEventListener('click', (e)=>{
if(e.target.classList.contains('checkboxBtn') || e.target.classList.contains('fa-plus')){
    if(btn.checked){btn.checked = false; return}
    btn.checked = true
    return
}
else if(e.target.classList.contains('btnM') !== true){btn.checked = false}
})