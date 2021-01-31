class welcome{
    constructor(frase, correção){
        this.notificação = document.querySelector('.notificaçãoContainer p')
        this.campoContainer = document.querySelector('.campoDigitação')
        this.notificaçãoContainer = document.querySelector('.notificaçãoContainer')
        this.campo = document.querySelector('.campoDigitação p')
        this.arrow = document.querySelector('.campoDigitação i')
        this.frase = frase
        this.correção = correção
    }
    digitar = ()=>{
        const digitar = new Promise((res)=>{
            let c = 0
            const digitação = setInterval(() => {
                if(c < this.frase.length){
                    this.campo.innerHTML += this.frase[c]
                    c++
                    return
                }
                res(digitação)    
            }, 100)
        })
        .then((digitação)=>{
            clearInterval(digitação)
            return new Promise((res)=>{
                let c = 1
                const apagar = setInterval(() => {
                    if(c < this.correção.length){
                        this.campo.innerHTML = this.campo.innerHTML.slice(0, -1)
                        c++
                        return
                    }
                    res(apagar)
                }, 200);
            })
        .then((apagar)=>{
            clearInterval(apagar)
            return new Promise((res)=>{
                let c = 0
                const corrigir = setInterval(() => {
                    if(c < this.correção.length){
                        this.campo.innerHTML += this.correção[c]
                        c++
                    }
                    else{clearInterval(corrigir); res()}
                }, 100);
            })
        })
        .then(()=>{
            return new Promise((res)=>{
                setTimeout(() => {
                    this.arrow.style.color = '#bfcae0'
                    res()
                }, 200);
            })
        })
        .then(()=>{
            this.enviar()
        })
    })
    }
    enviar = ()=>{
        setTimeout(() => {
            this.arrow.style.color = 'rgb(30, 52, 95)'
            this.notificação.innerHTML = this.campo.innerHTML
            this.notificaçãoContainer.style.display = 'flex'
            this.campo.innerHTML = ''
            const cursor = document.styleSheets[1].cssRules[0]
            let flag = true
            let count = 0
            const enviado = setInterval(() => {
                if(count == 8){
                    this.sumir(enviado)
                }
                if(flag){
                    cursor.style.opacity = 0
                    flag = false
                    count++
                    return
                }
                cursor.style.opacity = 1
                flag = true
                count++
            }, 500);
        }, 100);
    }
    sumir = (enviado)=>{
        clearInterval(enviado)
        this.campoContainer.style.transform = 'translateX(5000px)'
        this.notificaçãoContainer.style.transform = 'translateX(5000px)'
        setTimeout(() => {
            document.querySelector('.welcomeContainer').style.display = 'none'
        }, 3000);
    }
}
const mensagem = new welcome('Opa, seja bem-vinno(a)!', 'do(a)! ')
mensagem.digitar()