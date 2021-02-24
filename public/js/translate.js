i18next.init({
    lng: 'pt',
      debug: false,
      resources: {
          pt:{
              translation:{
                  "frase1": "Oi, meu nome é",
                  "frase2": "desenvolvedor front-end<br>e backend para a web.",
                  "inicio": "Início",
                  "sobreMim": "Sobre mim",
                  "contato": "Contato",
                  "sobreMim?": "Sobre mim? Bom...",
                  "classContato": "Contato",
                  "nome": "Nome",
                  "mensagem": "Mensagem",
                  "enviar": "Enviar"
              }
          },
          en:{
              translation:{
                  "frase1": "Hi, my name is",
                  "frase2": "front-end and backend<br>developer for web.",
                  "inicio": "Home",
                  "sobreMim": "About me",
                  "contato": "Contact",
                  "sobreMim?": "About me? Well...",
                  "classContato": "Contact",
                  "nome": "Name",
                  "mensagem": "Message",
                  "enviar": "Send"
              }
          }
      }
  })
  .then((err, t)=>{
  updateContent()
  })
  function updateContent(){
  document.querySelector('.início div h1:first-of-type').innerHTML = i18next.t('frase1');
  document.querySelector('.início div h1:last-of-type').innerHTML = i18next.t('frase2');
  document.querySelector('.sessões li:nth-child(1) a p').innerHTML = i18next.t('inicio');
  document.querySelector('.sessões li:nth-child(2) a p').innerHTML = i18next.t('sobreMim');
  document.querySelector('.sessões li:nth-child(4) a p').innerHTML = i18next.t('contato');
  document.querySelector('.oi p').innerHTML = i18next.t('sobreMim?');
  document.querySelector('.contato h1').innerHTML = i18next.t('classContato');
  document.querySelector('.nomeLabel').innerHTML = i18next.t('nome');
  document.querySelector('#msgLabel').innerHTML = i18next.t('mensagem');
  document.querySelector('.enviar').innerHTML = i18next.t('enviar');
  }
  
  i18next.on('languageChanged', ()=>{
      updateContent()
  })

