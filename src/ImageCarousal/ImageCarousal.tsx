import React, { useState, useEffect, useRef } from "react";
import "./carousal.css";
export const Carousal = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  // you can use ref to store intervalId to use this interval ID in whole component and clear interval by its id on mouseEnter to stop the carousel
  // and onMOuseleave again call setInterval using ref.current =setINtervl but so this will give us on m ouse enter and mouse leave stop start functionality
  const fetchImages = async () => {
    let res = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
    let responseData = await res.json();
    responseData = responseData?.data?.children;
    responseData = responseData?.filter((ele: any, index: number) => {
      if (ele?.data?.url_overridden_by_dest?.includes(".jpg")) {
        return ele;
      }
    });
    setData([...responseData]);
    console.log("my res data ", responseData);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    console.log("my currentIndex", currentIndex, "and", data.length - 1);
    let interval = setInterval(() => {
      // setCurrentIndex((prev) => prev + 1);

      setCurrentIndex((prev) => {
        console.log("asdfsa", data.length, "current index", prev);
        if (direction === "right" && prev < data?.length - 1) {
          // console.log("hello interval90");
          return prev + 1;
          //setprev((prev) => prev + 1);
        } else if (direction === "right" && prev === data?.length - 1) {
          console.log("hello interval");
          return 0;
          //  setprev((prev) => prev - data.length - 1);
        } else if (direction === "left" && prev > 0) {
          return prev - 1;
          //setprev((prev) => prev - 1);
        }
        // else if (direction === "left" && currentIndex === 0) {
        //   return prev + data.length - 1
        //  // setCurrentIndex((prev) => prev + data.length - 1);
        // }
        return data.length - 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data, direction]);
  const handleButtonClick = (move: string) => {
    console.log("i am calling", currentIndex);
    if (move === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (move === "left" && currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else if (move === "right" && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (move === "right" && currentIndex === data.length - 1) {
      setCurrentIndex(0);
    }
  };
  return (
    <div>
      {data && (
        <div className="container">
          {" "}
          <button
            onClick={() => {
              handleButtonClick("left");
              setDirection("left");
            }}
          >
            {"<"}
          </button>
          <img
            className="image-container"
            src={data[currentIndex]?.data?.url_overridden_by_dest}
            alt="not found"
          />
          <button
            onClick={() => {
              handleButtonClick("right");
              setDirection("right");
            }}
          >
            {">"}
          </button>
        </div>
      )}

      <div>{currentIndex}</div>
    </div>
  );
};
