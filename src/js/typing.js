/*const opa = 'Olá, meu nome é italo'
let i = 0
let array = []
const container = document.querySelector('.container')
    const intervalo = setInterval(() => {
        array.push(opa[i])
        container.innerHTML = array.join('')
        i++
        if(i == opa.length){clearInterval(intervalo);
            let c = 0
            const apagar = setInterval(() => {
                array.pop()
                container.innerHTML = array.join('')
                c++
                if(c == 5){
                    c = 0
                    clearInterval(apagar)
                    const nome = 'Ítalo'
                    const reescrever = setInterval(() => {
                        array.push(nome[c])
                        container.innerHTML = array.join('')
                        c++
                        if(c==5){        
                            clearInterval(reescrever)
                            enviarMensagem(array)
                            let flag = false
                            let pseudo = document.styleSheets[0].cssRules[0]
                            setInterval(() => {
                                if(flag){pseudo.style.display = 'inline'; flag = false}
                                else{pseudo.style.display = 'none'; flag = true}
                            }, 500);
                        }
                    }, 200);
                }
            
            }, 100)}
    }, 150);

function enviarMensagem(array){
    const botão = document.querySelector('.botão svg')
    const mensagem = array.join('')
    const balão = document.querySelector('.balão')
    balão.innerHTML = mensagem
    botão.classList.add('botãopress')
    setTimeout(() => {
        botão.classList.remove('botãopress')
        container.innerHTML = ''
        aparecerMensagem()
    }, 200);
}
function aparecerMensagem(){
    const aparecer = document.querySelector('.mensagem')
    setTimeout(() => {
        aparecer.style.display = 'flex'
    }, 1000);
}*/

const fraseString = 'Opa! Seja bem-vino(a)!'
const botão = document.querySelector('.botão')
let i = 0
let array = []
setTimeout(() => {
    const typing = new Promise((resolve, reject)=>{
        const digitar = setInterval(() => {
            array.push(fraseString[i])
            i++
            const campo = document.querySelector('.campo')
            campo.innerHTML = array.join('')
            if(i == fraseString.length){
                clearInterval(digitar)
                resolve(campo)
            }
        }, 100);
    })
    .then((campo)=>{
        let c = 5
        return new Promise((resolve, reject)=>{
            const corrigir = setInterval(() => {
                array.pop()
                campo.innerHTML = array.join('')
                c--
                if(c==0){
                    clearInterval(corrigir)
                    resolve(campo)
                }
            }, 80);
        })
    })
    .then((campo)=>{
        let c = 0
        const nomeCorrigido = 'do(a)'
        return new Promise((resolve, reject)=>{
            const correção = setInterval(() => {
                array.push(nomeCorrigido[c])
                campo.innerHTML = array.join('')
                c++
                if(c == nomeCorrigido.length){
                    botão.style.fill = '#33415e'
                    botão.style.strokeWidth = '800px';
                    clearInterval(correção)
                    resolve(campo)
                }
            }, 180);
        })
    })
    .then((campo)=>{
        const mensagemRecebida = document.querySelector('.mensagem')
        const fotoMensagem = document.querySelector('.fotoMensagem')
        mensagemRecebida.innerHTML = campo.innerHTML
        setTimeout(() => {
        campo.innerHTML=''
        botão.style.fill = 'black'
        botão.style.strokeWidth = 0
        fotoMensagem.style.display = 'flex'
        }, 100);
        setTimeout(() => {
            campo.classList.add('animate')
            botão.classList.add('animate')
        }, 100);
        setTimeout(() => {
            const tela = document.querySelector('.tela')
            tela.classList.add('animate')
            setTimeout(()=>{
                tela.style.display = 'none'
            }, 2000)
        }, 5000);

    })
}, 800);