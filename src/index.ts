//interfaces

interface Author{
    name: string
    avarter: string
}

const authorOne: Author = {name:"Aung Aung", avarter:"./img/avartar1.png"}

interface Post {
    title: string
    body: string
    tags: string[]
    create_At: Date
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'this is the post interesting',
    tags: ['gaming','tech'],
    create_At: new Date(),
    author: authorOne,
}

//as function argument types
function createPost(post: Post): void{
    console.log(`Create post ${post.title} by ${post.author.name}`);
    
}

createPost(newPost);

//with array
const posts: Post[] = []
posts.push(newPost)