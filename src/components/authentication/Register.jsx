import React, { useState } from "react";
import CommonForm from "../common/CommonForm";
import { registerFormControls } from "@/config/config";
import { useDispatch } from "react-redux";
import { registerUser, uploadImage } from "@/store/auth/authSlice";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  profilePic: null,
};

const Register = ({ setActiveTab }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({ confirmPassword: "" });
  //this is for submitting the form
  const dispatch = useDispatch();

  //this is for checking password and confirm password match or not
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };
      if (updatedForm.password !== value) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Password do not match",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
      return updatedForm;
    });
  };
  //this is for handling data after submitting
  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password do not match");
    }

    try {
      let imageUrl = null;
      if (formData?.profilePic) {
        const result = await dispatch(
          uploadImage(formData?.profilePic)
        ).unwrap();
        imageUrl = result.url;
      }
      //prepare data to send for registration
      const registrationData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        picture: imageUrl,
      };
      await dispatch(registerUser(registrationData)).unwrap();
      toast.success("You are registered. Please login now.");
      //clear form
      setFormData(initialState);
      //switch to login page
      setActiveTab("account");
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  console.log(formData, "Formdata");
  return (
    <div className="w-full">
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        onChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default Register;
