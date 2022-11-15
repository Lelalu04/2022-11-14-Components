export default rightNew


function rightNew(obj) {
    let {className} = obj
    const div = document.createElement(`div`)
    div.className = className

    div.innerHTML = `<div class="top-container">
    <div class="image">
        <img src="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png"
            class="attachment-thumbnail size-thumbnail wp-post-image" alt="" loading="lazy"
            srcset="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png 260w, https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png 300w, https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png 400w"
            sizes="(max-width: 260px) 100vw, 260px">
    </div>
    <div class="audio-time"> Trukmė: <span class="duration">7:55</span>

    </div>
    <button class="play-pause"> <img
            src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt=""></button>
</div>
<div class="news-descripsion">
    <h3>Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
    <div class="news-date">2021-09-02
    </div>
</div>`
return div
}
