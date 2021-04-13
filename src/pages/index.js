import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <a href="/blog">Blog Page</a>
      <hr />
      <Link href="/blog">
        <a>Next 에서 제공하는 Link 라이브러리</a>
      </Link>
    </div>
  )
}

export default HomePage