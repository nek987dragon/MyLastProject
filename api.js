import PocketBase from './pocketbase.es.mjs';

const url = 'https://mylastproject.pockethost.io/'
const pb = new PocketBase(url)

async function GetAllPost() {
    const records = await pb.collection('post').getFullList()
    return records
}
async function GetOnePost(id) {
    const record = await pb.collection('post').getOne(id)
    return record
}
export{
    GetAllPost,
    GetOnePost
}