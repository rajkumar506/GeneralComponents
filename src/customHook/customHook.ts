import { useState } from "react";
type handleChange = {
  type: string;
  e: any;
};
interface submittedvalue {
  email: string;
  password: string;
}
export const useHandleForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    submitted({ email, password });
  };

  const submitted = (value: submittedvalue) => {
    console.log("hello form submitted successfullu", value);
  };
  const handleChange = (e: any, type: string) => {
    if (type === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return {
    email,
    password,
    handleChange,
    handleSubmit,
  };
};
