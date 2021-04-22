import { useRouter } from 'next/router';

function Post({ post }) {

    return(
        <>
            <h1>Blog Post</h1>
            <h2>{post.id}</h2>
            <hr />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: {
            id: post.id.toString()
        }
    }))
  
    return {
        paths, 
        fallback: true
    }
  }

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }
  
  export default Post;