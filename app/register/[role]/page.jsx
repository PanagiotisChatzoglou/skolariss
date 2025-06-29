import React from "react";
import { SignupForm } from "../_components/signup-form";

const RegisterPage = ({ params }) => {
  const { role } = React.use(params);
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm role={role} />
      </div>
    </div>
  );
};

export default RegisterPage;
