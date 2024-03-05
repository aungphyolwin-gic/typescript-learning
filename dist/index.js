"use strict";
//interfaces
const authorOne = { name: "Aung Aung", avarter: "./img/avartar1.png" };
const newPost = {
    title: 'my first post',
    body: 'this is the post interesting',
    tags: ['gaming', 'tech'],
    create_At: new Date(),
    author: authorOne,
};
//as function argument types
function createPost(post) {
    console.log(`Create post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//with array
const posts = [];
posts.push(newPost);
