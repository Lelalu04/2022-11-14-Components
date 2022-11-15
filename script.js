import  header  from "./components/header.js";
import  leftNews  from "./components/leftNews.js";
import  rightNews  from "./components/rightNews.js";
import wrap from "./components/wrap.js";
import footer from "./components/footer.js";


const container = document.querySelector(`.all-container`)

const wrapper = wrap()
container.prepend(header(),wrapper,footer())

    const containerNews = document.createElement(`div`)
    containerNews.classList.add(`container-news`)
    containerNews.append(leftNews(),rightNews())
    wrapper.append(containerNews)
