function clickOutMenuUp(){
    window.addEventListener('click', (e)=>{
        const checkbox = document.querySelector('#checkboxMenu')
        if(e.target.nodeName !=='LABEL' && e.target.nodeName !=='INPUT'){
            checkbox.checked = false
        }
    })
}
clickOutMenuUp()
