import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          <li>NextJS Is a Great framwork</li>
        </Link>
        <Link href="/news/something-important">
          <li>Something Important</li>
        </Link>
      </ul>
    </>
  );
};

export default NewsPage;
