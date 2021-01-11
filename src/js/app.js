function clickOutMenuUp(){
    window.addEventListener('click', (e)=>{
        const checkbox = document.querySelector('#checkboxMenu')
        if(e.target.nodeName !=='LABEL' && e.target.nodeName !=='INPUT'){
            checkbox.checked = false
        }
    })
}
clickOutMenuUp()
<<<<<<< HEAD

=======
>>>>>>> f47865f607a5e1c5a0c697b7ba0425ef8fba471f
