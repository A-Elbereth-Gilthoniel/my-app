import React from "react";
import Counter from "./Counter";
import {useNavigate} from "react-router-dom";

function Post(props) {
    const router = useNavigate()
    console.log(router)
    return (
        <div className="post">
            <div>
            <strong onClick={()=> router(`/posts/${props.post.id}`)}>{props.post.name}</strong><br/>
            {/* <strong>{props.post.name}</strong><br/> */}
            Author: <strong className="underline">{props.post.author}</strong>
            </div>
            <div>
            <div className="rating">
                <Counter/>
            </div>
            </div>
        </div>
    )
}

export default Post;
