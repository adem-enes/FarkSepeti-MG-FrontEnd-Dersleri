import React from 'react';
import style from "./Post.module.css";
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
const Post = ({ post }) => {
    return (
        <div className={`col-lg-4 col-md-4`}>
            <div className={style.card}>
                <div className={style.container}>
                    <h4><b>{post.title}</b></h4>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;