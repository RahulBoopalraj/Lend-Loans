import React from "react";
import { CustomInput } from "../Components/auth/CustomInput";

const SignupPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Create an Account</h2>
          <div>
            <CustomInput
              heading="Your Name"
              placeholder="Enter your name"
              type="text"
              value={name}
              setValue={setName}
            />
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
            <CustomInput
              heading="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div className="card-actions justify-end">
            Already a user?{" "}
            <a href="#" className="link link-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
