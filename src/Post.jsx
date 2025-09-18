import './App.css'

export default function Post({post}){
    console.log(post)

    return(
        <div className="cards">
            <h4>post title:{post.title}</h4>
            <p>post description:{post.body}</p> 
        </div>
    )
}