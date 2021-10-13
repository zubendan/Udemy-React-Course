import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  // const newsId = router.query.newsId;

  // could send a request to the backend to fetch the news item with the newsId

  return (
    <>
      <h1>Something Important</h1>
    </>
  );
};

export default DetailsPage;
