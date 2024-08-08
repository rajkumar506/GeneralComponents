import React from "react";
import "./whatsapp.css";
type arr = {
  message: string;
  time: string;
  messageId: number;
};
type customer = {
  customerName: string;
  phone: number;
  countryCode: string;
  messages: Array<arr>;
};
export const List = ({ customers, setCurrentId }: any) => {
  const arr = Array(1).fill(1);
  return (
    <div className="list-container">
      <div className="inner-list-container">
        {/* <div className="inner-item-list-conatiner"> */}
        {customers &&
          customers?.map((ele: customer, index: number) => {
            return (
              <div
                key={index}
                className="list-item"
                onClick={() => setCurrentId(ele?.phone)}
              >
                {ele?.customerName}
              </div>
            );
          })}
        {/* </div> */}

        <div className="message">yor messsage are end to end encrypted</div>
      </div>
    </div>
  );
};
