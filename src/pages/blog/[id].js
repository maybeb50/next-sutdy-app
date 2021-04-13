import { useRouter } from 'next/router';
import posts from '../../posts.json';

export default () => {
    const router = useRouter();

    const post = posts[router.query.id];
    if(!post) return <p></p>

    return(
        <>
            <h1>Blog Post</h1>
            <p>Post id: {router.query.id}</p>
            <hr />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </>
    )
}