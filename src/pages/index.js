import Link from 'next/link';
import styles from './Button.module.css';

function HomePage({ posts }) {
  console.log(posts)
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <a href="/blog">Blog Page</a>
      <hr />
      <Link href="/blog">
        <a>Next 에서 제공하는 Link 라이브러리</a>
      </Link>
      <hr />
      <button
                type="button"
                className={styles.error}
            >
                Destory
            </button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const posts = await res.json();

  if(!posts) {
      return {
          notFound: true,
      }
  }

  return {
      props: { posts },
  }
}

export default HomePage;
