import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cart) => (
          <CartItem
            item={{
              id: cart.id,
              price: cart.price,
              quantity: cart.quantity,
              total: cart.totalPrice,
              name: cart.name,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
