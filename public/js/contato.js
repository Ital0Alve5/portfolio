window.addEventListener('scroll', contatoDeslize)
function contatoDeslize(){
    if(window.innerWidth > 500){
        const div = document.querySelector('.contato')
            if(div.getBoundingClientRect().top < innerHeight-((24*innerHeight)/100)+100){
            new Promise((res)=>{
            div.classList.add('contatoDoneTranslate')
            res()
         })
         .then(()=>{
              const intervalo = setInterval(()=>{
                  if(div.getBoundingClientRect().x > window.innerWidth/3){
                    div.classList.add('contatoDoneDimensions')
                      clearInterval(intervalo)
                    }
                })
            })
        }
    }
    else{
        if(div.getBoundingClientRect().top <  innerHeight-((24*innerHeight)/100)+100){
            new Promise((res)=>{
            div.classList.add('contatoDoneTranslate')
            res()
         })
         .then(()=>{
              const intervalo = setInterval(()=>{
                    div.classList.add('contatoDoneDimensions')
                      clearInterval(intervalo)
                })
            })
        }
    }
    }

const submit = document.querySelector('.enviar')
let msgCount = 0

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const msg = document.querySelector('#msg').value
    const statusMsg = document.querySelector('.statusMsg')

    const nomeError = document.querySelector('.nomeErro')
    const emailError = document.querySelector('.emailErro')
    const msgError = document.querySelector('.msgErro')
    const languageP = document.querySelector('.language p')
    nomeError.style.opacity = 0
    emailError.style.opacity = 0
    msgError.style.opacity = 0        
    if(msgCount < 1){
    fetch('/', {
        body: JSON.stringify({
            nome: nome,
            email: email,
            msg: msg,
            lang: languageP.innerHTML
        }),
        headers:  { 'Content-Type': 'application/json' },
        method: 'POST'
    })
    .then(async (response)=>{
        const resposta = await response.json()
        if(response.status > 200 || response.status < 300){
            if(resposta['0'] == true){
                msgCount++
                document.querySelector('#nome').value = ''
                document.querySelector('#email').value = ''
                document.querySelector('#msg').value = ''
                statusMsg.innerHTML = resposta['1']
                statusMsg.style.backgroundColor = 'rgb(174, 243, 141)'
                statusMsg.classList.toggle('statusMsgOn')
                return
            }

            const map = new Map(Object.entries(resposta))
            map.forEach((e)=>{
                if(e.indexOf('Name') > -1 || e.indexOf('Nome') > -1){nomeError.innerHTML = e; nomeError.style.opacity = 1}
                else if(e.indexOf('Email') > -1){emailError.innerHTML = e; emailError.style.opacity = 1}
                else{msgError.innerHTML = e; msgError.style.opacity = 1}
            })
         }
        else{
            statusMsg.innerHTML = 'Mensagem não enviada. Erro de servidor.'
            statusMsg.style.backgroundColor = 'rgb(228, 123, 123)'
            statusMsg.classList.toggle('statusMsgOn')
        }
    })
    .catch(()=>{
        statusMsg.innerHTML = 'Mensagem não enviada. Erro de servidor.'
        statusMsg.style.backgroundColor = 'rgb(228, 123, 123)'
        statusMsg.classList.toggle('statusMsgOn')
    })
    }
    else{
        statusMsg.innerHTML = 'Mensagem já enviada.'
        statusMsg.style.backgroundColor = 'rgb(228, 123, 123)'
        statusMsg.classList.toggle('statusMsgOn')
    }
})