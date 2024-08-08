import React from "react";
import "./whatsapp.css";
type arr = {
  message: string;
  time: string;
  messageId: number;
};
export const Chat = ({ data }: any) => {
  const arr = Array(50).fill(1);
  return (
    <div className="chat">
      {data &&
        data?.map((ele: arr, index: number) => {
          return (
            <div
              key={index}
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "green",
                marginBottom: "10px",
              }}
            >
              {ele?.message}
            </div>
          );
        })}
    </div>
  );
};
