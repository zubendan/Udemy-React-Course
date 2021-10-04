import { Route, Switch } from "react-router";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          {/* <Route path="*">
          <h1>Uh Oh</h1>
        </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
