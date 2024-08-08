import React, { useState, useEffect } from "react";
import { SideNavBar } from "./SideNavBar";
import { List } from "./List";
import { Chat } from "./Chat";
import { TopHeader } from "./TopHeader";
import "./whatsapp.css";
type arr = {
  message: string;
  time: string;
  messageId: number;
};
const customers = [
  {
    customerName: "Sahil",
    phone: 9999999998,
    countryCode: "+91",
    messages: [
      {
        message: "HI, how are you!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 12345,
      },
      {
        message: "wehere you have been!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 12345,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },

      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },

      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },

      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },

      {
        message: "I'm great.",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
      {
        message: "How you doing!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 67548,
      },
    ],
  },
  {
    customerName: "Prince",
    phone: 9999999999,
    countryCode: "+91",
    messages: [
      {
        message: "HI, how are you!",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 9876,
      },
      {
        message: "may be may be not",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 9877,
      },
    ],
  },
  {
    customerName: "Rajeev",
    phone: 9999999990,
    countryCode: "+91",
    messages: [
      {
        message: "Feeling confident today",
        time: "2022-09-12T12:06:32.669Z",
        messageId: 87634,
      },
    ],
  },
];
export const Whatsapp = () => {
  const [currentId, setCurrentId] = useState(null);
  const [currentData, setCurrentData] = useState<Array<arr>>(
    customers[0]?.messages
  );
  useEffect(() => {
    if (currentId) {
      let result = customers?.filter((ele, index) => {
        if (ele?.phone === currentId) return ele;
      });

      setCurrentData(result[0]?.messages);
    }
  }, [currentId]);
  return (
    <div className="container">
      <SideNavBar />
      <List customers={customers} setCurrentId={setCurrentId} />
      <TopHeader>
        <Chat data={currentData} />
      </TopHeader>
    </div>
  );
};
