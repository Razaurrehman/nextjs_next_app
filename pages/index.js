import Link from "next/link"

export default function IndexPage() {
  return (
    <Link
      href={{
        pathname: "/posts"
      }}
    >
      <a>Posts Page</a>
    </Link>
  )
}