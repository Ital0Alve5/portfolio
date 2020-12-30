const expand = document.querySelector('.expand')
const expandI = document.querySelector('.expand i')
let flag = false
expand.addEventListener('click', ()=>{
    const menu = document.querySelector('.menu ul')
    if(!flag){
        menu.style.width = '255px';
        flag = true
        expandI.classList.remove("fa-arrow-right")
        expandI.classList.add("fa-arrow-left")

    }
    else{menu.style.width = '55px';
        flag = false
        expandI.classList.remove("fa-arrow-left")
        expandI.classList.add("fa-arrow-right")
    }
})
    expand.addEventListener('mouseover',()=>{
        if(!flag){
            expand.classList.remove('animateArrowLeft')
            expand.classList.add('animateArrowRight')
        }
        else{
            expand.classList.remove('animateArrowRight')
            expand.classList.add('animateArrowLeft')
        }
    })
