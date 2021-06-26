// function liquidificador(frutas) {
// alert (frutas)
//}

// liquidificador ('maça banana')

// var nome = 'maik'
// nome = 'valeska'
// alert(nome)

// para ver os erros, ou pq algo não funciona, ir na página web e teclar f12 e console. mostra a linha errada, arquivo errado e o erro

// dom (documento) trasnforma tudo o que é html em objeto

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
//const nav = document.querySelector('#header nav') //query é procurar, estou dizendo: procura o seletor #header nav e coloca ele na constante nav
//const toggle = document.querySelectorAll('nav .toggle')

// console.log(toggle) //registra no console o toggle só para eu ver o que está acontecendo

// let é outra forma de registrar variável, a let vem para substituir a var

// for(const element of toggle) {
//console.log(element)
//} // para cada toggle, tenho dois, vai criar uma constante element, como é log, estou vendo o que está acontecendo

// for (const element of toggle) {
//element.addEventListener//('click', function() {alert('chegamos aqui')})
//} //quando eu clicar no icone aparece o alert

//for (const element of toggle) {
//element.addEventListener('click', function () {
//nav.classList.toggle('show')
//})
//} // ei, nav, na sua lista de classes tem o show? se não tiver, coloca, se tiver, tira. o toggle é troca, lembra?

/* quando clicar em um item do menu, esconder o menu */
//const links = document.querySelectorAll('nav ul li a')

//for (const link of links) {
//link.addEventListener('click', function () {
//nav.classList.remove('show')
//})
//}

/* mudar o header da página, fazer aparecer o sobreado, quando der scrool */ /* o js vai ver se passei da altura do header, ou seja, se estou movimentando a página, e se eu tiver passado da altura do header vai colocar o sombreado */
/* mudar o header da página quando der scroll */
//const header = document.querySelector('#header')
//const navHeight =
//header.offsetHeight /* vou pegar a altura que está no header, offsetHeight é o deslocamento da altura */

/* os eventos de clique anterios foram para botão, agora o evento de clique será para a janela toda */
//window.addEventListener('scroll', function () {
//if (window.scrollY >= navHeight) {
// scroll é maior que a altura do header
//header.classList.add('scroll')
//} else {
// menor que a altura do header
//header.classList.remove('scroll')
//}
//}) /* a janela está vendo que quando tiver um evento de scroll, terá uma funcionalidade, ele tem que rodar uma funcionalidade, essa funcionalidade tem que ver se o scroll passou da altura do header */

/* Testimonials carousel slider swiper */
//const swiper = new Swiper('.swiper-container', {
//slidesPerView: 1,
//pagination: {
//el: '.swiper-pagination'
//},
//mousewheel: true, // ao rodar a rodinha do mouse troca de slide
//keyboard: true // troco de slide pelas setas do computador
//})

/* ScrollReveal: Mostrar elementos quando der scroll na página - 700 mls - reset:true sigbifica, chegou no fim da página, volta e faz a animação de novo, faz a animação sempre */
//const scrollReveal = ScrollReveal({
//origin: 'top',
//distance: '30px',
//duration: 700,
//reset: true
//})

/* Uma das formas de fazer string é com crase, e a crase permite que eu dê enter entre as informações */
//scrollReveal.reveal(
//`#home .image, #home .text,
//#about .image, #about .text,
//#services header, #services .card,
//#testimonials header, #testimonials .testimonials
//#contact .text, #contact .links
//footer .brand, footer .social
//`,
//{ interval: 100 }
//)

/* Botão voltar para o topo */

// const backToTopButton = document.querySelector('.back-to-top')
//window.addEventListener('scroll', function() {
//if(window.scrollY >= 560) {
//backToTopButton.classList.add('show')
//} else {
//backToTopButton.classList.remove('show')
//}
//})

//PROF FEZ DE UMA FORMA AINDA MAIS ORGANIZADA (O PROF É O MAIK DA ROCKETSEAT)

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // o const vai procurar no documento, se deixar dentro da função, toda vez que a função for rodar ele vai procurar no documento de novo, o que não há necessidade

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4//pageYOffset é deslocamento no eixo y, pega na página o deslocamento em y. innerHeight pega todo o tamanho da window e vai dividir em 8, no *4 estou dizendo para pegar 4 desses 8 depacinhos; com esse comando é criado um traço virtual, que quando chegar nele, vai executar um comando; cheguei nesses números por meio de teste no código

  for ( const section of sections ) { //para cada seção de seções irá começa a rodar uma sequência de códigos
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight //descolamento de altura
  const sectionId = section.getAttribute('id') //com o getatributte estou dizendo qual informação quero pegar

  // nesse grupo de código está pegando o topo da seção, a altura da seção e o ID da seção

  const checkpointStart = checkpoint >= sectionTop //checkpoint ultrapassou o topo da seção, é o início 

  const checkpointEnd = checkpoint <= sectionTop + sectionHeight
  }

  if(checkpointStart && checkpointEnd) {
    document
    .querySelector('nav ul li a[href*='+ sectionId + ']') //peqgue o item na navegação que corresponda ao id da seção mostrada
    .classList.add('active')

  } else {
    document
    .querySelector('nav ul li a[href*='+ sectionId + ']') //peqgue o item na navegação que corresponda ao id da seção mostrada
    .classList.remove('active')
  }

}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}) //toda vez que estiver fazendo scroll entra na função e faz o loco de códigos acima e pegar cada seção, pois precisa ver se a seção está no checkpoint, e devem ser feitos dois checkpoints, inicial e final, para saber quando começa e quando termina cada seção
