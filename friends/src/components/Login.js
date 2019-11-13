import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [auth, setAuth] = useState({ username: "", password: "" });

  const handleChanges = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/login", auth)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log("login error", err.response));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Login name..."
          value={auth.username}
          onChange={handleChanges}
        />

        <input
          type="text"
          name="password"
          placeholder="Login  password..."
          value={auth.password}
          onChange={handleChanges}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
