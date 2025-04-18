import React, { useState } from "react";
import CommonForm from "../common/CommonForm";
import { registerFormControls } from "@/config/config";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  return (
    <div className="w-full">
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default Register;
