import { GetAllPost, GetOnePost , url} from "./api.js"


function displayAllposts(posts)
{
    const postwrapper = document.querySelector(".postwrapper")
    postwrapper.innerHTML =``
    for(let i = 0; i < posts.length; i++){
        let currentpost = posts[i]
        postwrapper.innerHTML = postwrapper.innerHTML + `
        <div class="post">
            <img src="${url}/api/files/${currentpost.collectionName}/${currentpost.id}/${currentpost.thumbnail}" alt="">
            <h4>${currentpost.text}</h4>
            <p>${currentpost.content}</p>
        </div>
    </div>

        `
    }

}

window.addEventListener("DOMContentLoaded", async () => {

    console.log("everything is running")
    const posts = await GetAllPost()
    console.log(posts)
    displayAllposts(posts)
})