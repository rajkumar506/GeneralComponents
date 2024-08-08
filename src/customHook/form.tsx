import React, { useEffect } from "react";
import { useHandleForm } from "./customHook";
export const CustomHook = () => {
  const { email, password, handleChange, handleSubmit } = useHandleForm();
  console.log("my email", email);
  console.log("my password", password);
  return (
    <div>
      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => handleChange(e, "email")}
      />
      <input
        placeholder="password"
        type="text"
        value={password}
        onChange={(e) => handleChange(e, "password")}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
