import Link from "next/link";

export const metadata = {
  title: "Learning",
};

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/products'}>Products</Link>
    </>
  );
}
