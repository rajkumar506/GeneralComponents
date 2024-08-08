import React from "react";
import "./whatsapp.css";
export const TopHeader = (props: any) => {
  return (
    <>
      <div className="chat-and-list-container">
        <header className="top-header"></header>
        {props.children}
        {/* <div style={{ display: "flex", marginTop: "0px", height: "100%" }}>
          {props.children}
        </div> */}
        <footer className="footer"></footer>
      </div>
    </>
  );
};
