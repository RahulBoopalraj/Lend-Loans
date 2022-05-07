import React from "react";
import { CustomInput } from "../Components/auth/CustomInput";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <CustomInput
              heading="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              heading="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              setValue={setPassword}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="card-actions justify-end">
            New to us?{" "}
            <a href="#" className="link link-primary">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
