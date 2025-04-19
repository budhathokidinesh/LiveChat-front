import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { uploadImage } from "@/store/user/userSlice";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  buttonText,
  onSubmit,
  onChange,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  //this is handling file upload
  const handleFileUpload = (file) => {
    dispatch(uploadImage(file));
  };
  const renderInputsByComponentType = (getControlItem) => {
    const value = formData[getControlItem.name] || "";
    if (getControlItem.componentType === "file") {
      return (
        <>
          <Input
            type="file"
            accept="image/*"
            id={getControlItem.name}
            onChange={(e) => {
              const file = e.target.files[0];
              setFormData({ ...formData, [getControlItem.name]: file });

              //preview the image
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setPreview(imageUrl);
                //handleFileUpload
                handleFileUpload(file);
              }
            }}
            className="cursor-pointer"
          />
          {preview && (
            <img
              src={preview}
              alt="Profile Preview"
              className="w-20 h-20 object-cover rounded-full mt-2"
            />
          )}
        </>
      );
    }
    if (getControlItem.type === "password") {
      return (
        <div className="relative">
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={
              onChange
                ? onChange
                : (e) =>
                    setFormData({
                      ...formData,
                      [getControlItem.name]: e.target.value,
                    })
            }
          />
          <button
            type="button"
            className="absolute right-2 top-0.5 text-gray-500 hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      );
    }
    return (
      <Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        value={value}
        onChange={
          onChange
            ? onChange
            : (e) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: e.target.value,
                })
        }
      />
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
            {errors && errors[controlItem.name] && (
              <p className="text-red-500 text-sm">{errors[controlItem.name]}</p>
            )}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 mb-4 w-full hover:cursor-pointer">
        {buttonText || "Submit"}
      </Button>
      {buttonText === "Login" ? (
        <Button
          type="submit"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("12345");
          }}
          className="mt-2 mb-4 w-full hover:cursor-pointer"
        >
          Get Guest User Credential
        </Button>
      ) : null}
    </form>
  );
};

export default CommonForm;
