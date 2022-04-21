import Link from "next/link"

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post?.id}>
          <Link
              href={{
                pathname:  `/posts/${post?.id}`,
              }}
          >
              <a>{post?.title}</a>
          </Link>
          </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/posts')
  const posts = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default Blog;