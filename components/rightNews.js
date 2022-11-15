import podcastContainer from "./potcastContainer.js";

export default createContainerNews
 
function createContainerNews() {
    const rightContainer = document.createElement(`div`)
    rightContainer.className = `right-container`

    const h2 = document.createElement(`h2`)
    h2.textContent = `Podcastai ir radijo laidos`
    h2.className = `text-h`

    const rightNews = document.createElement(`div`)
    rightNews.className = `right-news`

    const new1 = podcastContainer({
        divClassName: `right-new new1`
    })
    const new2 = podcastContainer({
        divClassName: `right-new new2`
    })
    const new3 = podcastContainer({
        divClassName: `right-new new3`
    })
    const new4 = podcastContainer({
        divClassName: `right-new new4`
    })
  

    rightNews.append(new1,new2,new3,new4)
    rightContainer.append(h2,rightNews)
    return rightContainer
}