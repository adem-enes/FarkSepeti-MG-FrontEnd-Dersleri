import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import { fetchPosts } from "../api";
import products from "../mock/products20.json";
import Post from './Post/Post';


const Products = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    await fetchPosts().then((response) => {
      setPosts(response.data);
      console.log(response);
    });
  }


  return (
    <div className="row">
      {posts?.map(post =>
        <Post post={post} key={post.id} />
      )}
      {/* {products.map(product =>
        <Card product={product} key={product.id} />
      )} */}
    </div>
  )
}

export default Products;