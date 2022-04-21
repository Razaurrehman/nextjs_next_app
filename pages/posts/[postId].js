import { useRouter } from 'next/router';

function PostDetial({ post }) {
    const router = useRouter();
    return (
        <div>
            <div>
                <span onClick={() => router.back()}>Click here to go back</span>
            </div>
            <ul>
                <li>{post?.id} {post?.title} {post?.body}</li>
            </ul>
        </div>
    )
  }

export async function getStaticProps(centext) {
    const { params } = centext;
    const response = await fetch(`https://6da8-180-178-133-66.ngrok.io/posts/${params.postId}`);
    const data = await response.json();
    return {
        props: {
            post: data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://6da8-180-178-133-66.ngrok.io/posts')
    const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { postId: post.id.toString() },
    }))
    return { paths, fallback: true }
}

export default PostDetial