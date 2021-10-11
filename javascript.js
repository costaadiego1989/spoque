//Pegando todas li do menu principal
const ultimoItemMenu = document.querySelectorAll(".menu-principal li")

//Transformando as li em um Array
let ultimoItemMenuArray = Array.from(ultimoItemMenu)

//Mostrando último li no console
console.log(ultimoItemMenuArray[ultimoItemMenuArray.length - 1].innerHTML)

//Adicionando a classe contato no último item da li
ultimoItemMenuArray = ultimoItemMenuArray[ultimoItemMenuArray.length - 1].classList.add("contato")

//Ajustando posicionamento título segundo e quarto titulo do quado de avisos
const titulosQuadroAvisos = document.querySelectorAll("#avisos h3")
titulosQuadroAvisosArray = Array.from(titulosQuadroAvisos)
titulosQuadroAvisos[3].classList.add("posicao-3")
console.log(titulosQuadroAvisosArray[2])
titulosQuadroAvisos[4].classList.add("posicao-4")

//Criando uma Faq
//Selecionando todos os +
const selecionandoPontoClick = document.querySelectorAll("#duvidas .more")
console.log(selecionandoPontoClick)
const selecionandoPontoClickArray = Array.from(selecionandoPontoClick)
console.log(selecionandoPontoClickArray)
const selecionandoTextosToggle = document.querySelectorAll("#duvidas p")

function activeTab() {
    this.classList.toggle("ativo")
    this.nextElementSibling.classList.toggle("ativo")    
}

selecionandoPontoClickArray.forEach((item) => {
    item.addEventListener("click", activeTab)
})

//Criando scroll to Top
//Selecionando o botão
const botaoToTop = document.querySelector("#toTop")

window.onscroll = function() {
    mostrarScrollToTop()
};

function mostrarScrollToTop() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botaoToTop.style.display = "block";
    } else {
        botaoToTop.style.display = "none";
    }
}

function aoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
  }

  //Criando link de navegação Suave
  //Pegando todos os links
  const linksSite = document.querySelectorAll(".menu-principal a")
  console.log(linksSite)

  function scrollToSection(item) {
    item.preventDefault()
    const href = item.currentTarget.getAttribute("href")
    console.log(href)
    const section = document.querySelector(href)
    console.log(section)
    const topo = section.offsetTop
    console.log(topo)
    window.scrollTo({
        top: topo,
        behavior: "smooth"
    })

    if(item.currentTarget.getAttribute("href") === section) {
        href.classList.add("ativo")
    }

  }

  linksSite.forEach((link) => {
      link.addEventListener("click", scrollToSection)
  })

  //Escondendo Menu Desktop
  const selecionandoMenu = document.querySelector(".menu-principal")
  const selecionandoMenuBurguer = document.querySelector(".menuBurguer")

  const tamanhoWindowDesktop = window.matchMedia("(max-width: 980px)").matches

  if(tamanhoWindowDesktop) {
      selecionandoMenu.style.display = "none"
      selecionandoMenuBurguer.style.display = "block"
  }

  //Adicionando container mobile ao conteudo principal do site
  const selecionandoIconeMobile = document.querySelector(".menuBurguer")
  const selecionandoMenuBurguerContainer = document.querySelector(".menuMobileContainer")

  function menuBurguer() {
      selecionandoMenuBurguerContainer.classList.toggle("ativo")
  }

  
  //Criando link de navegação Suave
  //Pegando todos os links
  const linksSiteMobile = document.querySelectorAll(".menuMobileContainer a")
  console.log(linksSiteMobile)

  function scrollToSection(item) {
    item.preventDefault()
    const href = item.currentTarget.getAttribute("href")
    console.log(href)
    const section = document.querySelector(href)
    console.log(section)
    const topo = section.offsetTop
    console.log(topo)
    window.scrollTo({
        top: topo,
        behavior: "smooth"
    })

    if(item.currentTarget.getAttribute("href") === section) {
        href.classList.add("ativo")
    }

  }

  linksSiteMobile.forEach((link) => {
      link.addEventListener("click", scrollToSection)
  })