import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dumy_Products = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "My first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "My second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dumy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
