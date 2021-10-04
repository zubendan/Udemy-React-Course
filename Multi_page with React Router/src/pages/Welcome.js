import { Route } from "react-router";

const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user </p>
      </Route>
    </>
  );
};

export default Welcome;
