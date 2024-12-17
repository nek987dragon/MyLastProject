import { GetAllPost, GetOnePost } from "./api.js"


window.addEventListener("DOMContentLoaded", async () => {

    console.log("everything is running")
    const posts = await GetAllPost()
    console.log(posts)
})