import React, { useState } from "react";
import "./datePicker.css"
import { calendarData } from "./calenderData";
export const DatePicker = () => {
    const daysArray: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const initialDay: number = new Date('2024-01-02').getDay();
    const initialDate: number = new Date('2024-01-02').getDate();
    const [selectedDateID,setSelectedDateId]= useState(1)
    const [pickedDate, setPickedDate] = useState({ day: daysArray[initialDay], date: initialDate })
    const getDaysBeforeFirstDate = (firstDate: string) => {
        const firstDateObject = new Date(firstDate);
        console.log("my first date is ", firstDateObject.getDay());
        const daysBefore: Array<number> = [];

        for (let i = 0; i < firstDateObject.getDay(); i++) {
            daysBefore.push(i);
            //     const previousDate = new Date(firstDateObject);
            //    previousDate.setDate(firstDateObject.getDate() - i);
            //    console.log("my previus date",firstDateObject.getDate() - i+1)        
        }

        return daysBefore;
    };
    //  const datesArray= Array(30).fill(1)
    const daysBeforeDate: Array<number> = getDaysBeforeFirstDate(calendarData.days[0].date);
    const handleDateClick = (newDate: any,index:number) => {
        setPickedDate({ ...pickedDate, day: daysArray[newDate?.getDay()], date: newDate?.getDate() })
        setSelectedDateId(index)
    }
    return (
        <div className="date-picker-container">
            <div className="picked-date-container">
                <div>SELECT DATE</div>
                <div className="picked-date">
                    <span>{pickedDate?.day}</span>,
                    <span> Jan {pickedDate?.date}</span>
                </div>
            </div>
            <div className="months-year-selection">January 2024</div>
            <div className="week-days-name">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className="month-dates-conatiner">

                {daysBeforeDate?.map((element, index) => {
                    return (
                        <span key={index + 100}></span>
                    )
                })}

                {calendarData.days?.map((element, index) => {
                    const newDate = new Date(element?.date)
                    return (
                        <span className={`date-number-color ${index===selectedDateID?"selectedDate":""} `} key={index} onClick={() => handleDateClick(newDate,index)}>{newDate.getDate()}</span>
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