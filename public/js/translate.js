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
                  "enviar": "Enviar",
                  "textoSobreMim": "Sou um desenvolvedor web de 21 anos, estudande de Eng. de Materiais pela UFRPE que descobriu este universo através de matérias de programação na faculdade. Esta mesma faculdade me possibilitou fazer <strong>cursos oferecidos por universidades estrangeiras</strong> sem custos, obtendo mais de 10 certificações das quais mostro algumas abaixo. Não parei mais. Passei em uma Escola Técnica Estadual na qual atualmente estudo <strong>técnico em desenvolvimento de sistemas</strong> e concluí um <strong>bootcamp fullstack</strong> pela IGTI, fora os muitos cursos pagos que concluí. Escolhi fazer este site em <strong>JavaScript e CSS puros</strong>, com <strong>NodeJS e integração ao banco de dados NoSQL MongoDB</strong>, construído usando <strong>arquitetura full-MVC</strong> e usando o <strong>GIT para versionamento</strong>. Longe de estar satisfeito, sigo estudando <strong>React</strong> e, muito em breve, adicionarei o desenvolvimento mobile ao meu repertório de conhecimentos."

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
                  "enviar": "Send",
                  "textoSobreMim": "I'm a 21-year-old web developer and Materials Engineering student at UFRPE who discovered this universe through programming courses in college. This college made it possible for me to take programs offered by <strong>foreign universities</strong> free of charge, obtaining more than 10 certifications of which i show some of them below. I never stopped. I went to a diploma program where I am currently studying <strong>systems development</strong> and I also completed a <strong>fullstack bootcamp</strong> by IGTI in addition to the many paid courses I've completed. I chose to build this website in pures JavaScript and CSS, NodeJS  and integration with MongoDB database. The web site was built using <strong>full-MVC architecture</strong> and using <strong>GIT</strong> for versioning. Far from being satisfied, I'm studying <strong>React</strong> and I will also add <strong>mobile development</strong> to my repertoire of knowledge very soon."
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
  document.querySelector('.p p').innerHTML = i18next.t('textoSobreMim')
  }
  
  i18next.on('languageChanged', ()=>{
      updateContent()
  })

