import { use } from "react"
import Post from "./Post"

export default function Player({postPromise}){
// console.log('form player',postPromise)
const posts = use(postPromise)
// console.log(posts)


    return(
        <div>
            <h3>All post are:</h3>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    )
}