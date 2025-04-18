import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CommonForm = ({ formControls, formData, setFormData, buttonText }) => {
  const [showPassword, setShowPassword] = useState(false);
  const renderInputsByComponentType = (getControlItem) => {
    const value = formData[getControlItem.name] || "";

    if (getControlItem.type === "password") {
      return (
        <div className="relative">
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={(e) =>
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
        onChange={(e) =>
          setFormData({ ...formData, [getControlItem.name]: e.target.value })
        }
      />
    );
  };
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 mb-4 w-full hover:cursor-pointer">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
