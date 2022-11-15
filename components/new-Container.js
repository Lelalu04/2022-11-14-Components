export default createNewsContainer

function createNewsContainer(obj) {
    let {className, link, photoLink,srcset,h2,time} = obj
    const div = document.createElement(`div`)
    div.className = className

    div.innerHTML =  `<a href=${link}>
    <div class="news-image">

        <img width="1024" height="994"
            src=${photoLink}
            class="attachment-large size-large wp-post-image" alt=""
            srcset=${srcset}
            sizes="(max-width: 1024px) 100vw, 1024px">
    </div>
    <div class="news-descripsion">
        <div class="news-text">NAUJIENOS
            <h2>${h2}</h2>
            <div class="news-date">${time}
            </div>
        </div>
    </div>
</a>`
return div
}

