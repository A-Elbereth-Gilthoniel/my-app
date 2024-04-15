import React from "react";
import Post from "../PostItem";

function NewsList({news, title}) {
    return (
        <div>
            <h1>{title}</h1>
            {news.map((post) => <Post post = {post} key = {post.id}/>)}
        </div>
    )
}

export default NewsList
