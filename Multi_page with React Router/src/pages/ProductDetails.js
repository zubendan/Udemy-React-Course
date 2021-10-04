import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  if (params.productId === "super-secret-page") {
    return <h1>seeeeeeecreeeeeeet</h1>;
  }
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
