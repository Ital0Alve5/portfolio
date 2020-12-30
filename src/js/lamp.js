function lamp(){
    const lampada = document.querySelector('.nightIconContainer svg')
    let flag = true
    lampada.addEventListener('click', ()=>{
        if(flag){
            lampada.childNodes[1].removeChild(lampada.childNodes[1].childNodes[0])
            flag = false
        }
        else{
        const light = document.createTextNode(".str0 {stroke:black;stroke-width:1270;stroke-miterlimit:22.9256}.fil0 {fill:black;fill-rule:nonzero}")
        lampada.childNodes[1].appendChild(light)
        flag = true
        }
    })
}
lamp()

function language(){
    const lang = document.querySelector('.translateContainer')
    let idiom = true
    lang.addEventListener('click', ()=>{
        if(idiom){
            lang.childNodes[1].removeChild(lang.childNodes[1].childNodes[0])
            const en = document.createTextNode('EN')
            lang.childNodes[1].appendChild(en)
            idiom = false
        }
        else{
            lang.childNodes[1].removeChild(lang.childNodes[1].childNodes[0])
            const pt = document.createTextNode('PT')
            lang.childNodes[1].appendChild(pt)
            idiom = true}
    })
}
language()