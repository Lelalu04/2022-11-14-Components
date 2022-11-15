import wrap from "./wrap.js";
export default header



function header(){
    
    const headerElement = document.createElement(`div`)
    headerElement.classList.add(`site-header`)
    
    const wrapper = wrap()

    const headerContainer = document.createElement(`div`)
    headerContainer.classList.add(`header-container`)

    const mainLogo = document.createElement(`div`)
    mainLogo.classList.add(`main-logo`)
    const img = document.createElement(`img`)
    img.setAttribute(`src`, "https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg")
    img.setAttribute(`width`, "115")
    img.setAttribute(`height`, "35")

    const navPrimary = document.createElement(`nav`)
    navPrimary.classList.add(`nav-primary`)
    const navPrimaryInner = document.createElement(`div`)
    navPrimaryInner.classList.add(`nav-primary-inner`)

    const mainMenu = document.createElement(`ul`)
    mainMenu.classList.add(`nav`)

    mainMenu.innerHTML = `<li class="main"><a class="main-word" href="#">Studentams</a><li>
    <li class="main"><a class="main-word" href="#">Verslui</a></li>
    <li class="main"><a class="main-word" href="#">Programos</a></li>
    <li class="main"><a class="main-word" href="#">Apie mus</a></li>
    <li class="main"><a class="main-word" href="#">Naujienos</a></li>
    <li class="main"><a class="main-word" href="#">IT testas</a></li>
    <li class="main"><a class="main-word" href="#">Kontaktai</a></li>
    <li class="main"><a class="main-word" href="#">EN</a></li>`

    const headerAdditional = document.createElement(`div`)
    headerAdditional.classList.add(`header-additional`)

    const a = document.createElement(`a`)
    a.textContent = `Skambinti`
    a.classList.add(`button`)

    headerAdditional.append(a)
    navPrimaryInner.append(mainMenu)
    navPrimary.append(navPrimaryInner)
    mainLogo.append(img)
    headerContainer.append(mainLogo,navPrimary,headerAdditional)
    wrapper.append(headerContainer)
    headerElement.append(wrapper)
    return headerElement 
    // document.querySelector(`.all-container`).append(headerElement)
}