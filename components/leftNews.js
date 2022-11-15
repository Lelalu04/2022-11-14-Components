import newsContainer from "./new-Container.js";
export default createContainerNews

function createContainerNews() {

    const leftContainer = document.createElement(`div`)
    leftContainer.classList.add(`left-container`)

    const h1 = document.createElement(`h1`)
    h1.classList.add(`text-h`)
    h1.textContent = `Naujienos`

    const leftNews = document.createElement(`div`)
    leftNews.className = `left-news`

    const leftBottoms = document.createElement(`div`)
    leftBottoms.className = `left-bottom-news`



    const leftNew = newsContainer({
        className: `new left-new`,
        link: "https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-300x291.jpg 300w, https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-768x745.jpg 768w, https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-2048x1988.jpg 2048w, https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-scaled.jpg 2400w",
        h2: `Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?`,
        time: `2022-03-23`
    })

    const rightNew = newsContainer({
        className: `new right-new`,
        link: "https://codeacademy.lt/codeacademy-projektine-veikla-indelis-i-grazesne-ateiti/",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-300x200.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-768x512.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n.jpg 1600w",
        h2: `„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį`,
        time: `2021-11-09`
    })

    const leftTop = newsContainer({
        className: `bottom-new left-top`,
        link:"#",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-300x203.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-768x519.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg 2048w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-scaled.jpg 2400w",
        h2: `„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį`,
        time: `2021-11-09`
    })

    const rightTop = newsContainer({
        className: `bottom-new right-top`,
        link:"#",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-300x203.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-768x519.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg 2048w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-scaled.jpg 2400w",
        h2: `„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį`,
        time: `2021-11-09`
    })

    const leftBottom = newsContainer({
        className: `bottom-new left-bottom`,
        link:"#",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-300x203.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-768x519.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg 2048w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-scaled.jpg 2400w",
        h2: `„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį`,
        time: `2021-11-09`
    })

    const rightBottom = newsContainer({
        className: `bottom-new right-bottom`,
        link:"#",
        photoLink: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg",
        srcset: "https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-300x203.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-768x519.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-2048x1384.jpg 2048w, https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-scaled.jpg 2400w",
        h2: `„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį`,
        time: `2021-11-09`
    })

    const allNewsA = document.createElement(`a`)
    allNewsA.setAttribute(`href`, "https://codeacademy.lt/visos-naujienos/")
    allNewsA.className = "button-big"
    allNewsA.textContent = `Visos naujienos`

    // const rightNew = document.createElement(`div`)
    // rightNew.className = `new right-new`
    leftBottoms.append(leftTop,rightTop,leftBottom,rightBottom)
    leftNews.append(leftNew,rightNew)

    leftContainer.append(h1, leftNews,leftBottoms,allNewsA)
    return leftContainer
    containerNews.append(leftContainer)
    wrapper.append(containerNews)
    return wrapper
}