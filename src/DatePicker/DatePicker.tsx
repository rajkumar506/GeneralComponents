import React from "react";
import "./datePicker.css"
import { calendarData } from "./calenderData";
export const DatePicker = () => {
    const getDaysBeforeFirstDate = (firstDate:string) => {
        const firstDateObject = new Date(firstDate);
        console.log("my first date is ", firstDateObject.getDay());
        const daysBefore:Array<number> = [];
        
        for (let i = 1; i < firstDateObject.getDay(); i++) {
          const previousDate = new Date(firstDateObject);
          console.log("my previus date",previousDate)
          previousDate.setDate(firstDateObject.getDate() - i);
        //   daysBefore.unshift({
        //     date: formatDate(previousDate),
        //     events: [] // You can customize this as needed
        //   });
        }
    
        return daysBefore;
      };
  //  const datesArray= Array(30).fill(1)
  const daysBeforeDate = getDaysBeforeFirstDate(calendarData.days[0].date)
    return (
        <div className="date-picker-container">
            <div className="picked-date-container">
                <div>SELECT DATE</div>
                <div className="picked-date">
                    <span>Mon</span>,
                    <span>Nov 17</span>
                </div>
            </div>
            <div className="months-year-selection">November 2018</div>
            <div className="weekely-days">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className="month-dates-conatiner">
                {calendarData.days?.map((element,index)=>{
                    return(
                        <span key={index}>{index}</span>
                    )
                })}
            </div>
            <div className="cancel-ok-container">
                <span className="cancel">CANCEL</span>
                <span>OK</span>
            </div>
        </div>
    )
}