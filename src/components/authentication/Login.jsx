import React, { useState } from "react";
import CommonForm from "../common/CommonForm";
import { loginFormControls } from "@/config/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "@/store/user/userSlice";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser(formData)).unwrap();
      if (response?.success) {
        toast.success("Login successful!");
        navigate("/chats");
      } else {
        toast.error(response.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.message || "Somethig went wrong");
    }
  };
  return (
    <div className="w-full">
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        errors={error ? { form: error } : null}
      />
    </div>
  );
};

export default Login;
