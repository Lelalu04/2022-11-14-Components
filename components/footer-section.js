export default createSection

function createSection(innerHTML, boolen = true) {
    const footerSection = createElement(`section`, "", "widget")
    if(!boolen){
    const ul = createElement(`ul`)
    footerSection.append(ul)
    ul.innerHTML = innerHTML
    return footerSection
    }
    const meniuContainer = createElement(`div`, "", "meniu-container")
    const ul = createElement(`ul`, "", "meniu")
    ul.innerHTML = innerHTML

    meniuContainer.append(ul)
    footerSection.append(meniuContainer)
    return footerSection
}
function createElement(element, text, className) {
    let variable = document.createElement(element)
    variable.textContent = text
    if(className){
        variable.className = className
    }
    return variable
}