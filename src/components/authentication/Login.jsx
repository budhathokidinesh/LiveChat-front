import React, { useState } from "react";
import CommonForm from "../common/CommonForm";
import { loginFormControls } from "@/config/config";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  return (
    <div className="w-full">
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default Login;
