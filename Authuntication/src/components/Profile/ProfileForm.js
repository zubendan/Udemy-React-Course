import { useContext, useRef } from "react";
import { useHistory } from "react-router";

import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const newPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewpassword = newPasswordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBN2rqvTvdisf-PIcRz6EldQppIm07avxA",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewpassword,
          returnSecureToken: false,
        }),
      }
    ).then((response) => {
      //assumption of always succedding

      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
