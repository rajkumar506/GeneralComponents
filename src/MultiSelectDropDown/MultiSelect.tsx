import React, { useState, useEffect, ChangeEvent } from "react"
type Option = {
    label: string,
    value: string,
    isChecked:boolean
}
export const MultiSelect = () => {
    const [dropDownData, setDropDownData] = useState<Array<Option>>([
        { label: "d", value: "d",isChecked: false },
        { label: "a", value: "a",isChecked: false },
        { label: "b", value: "b",isChecked: false },
        { label: "c", value: "c",isChecked: false }])
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
   
    const handleInputCheckBox = (event: ChangeEvent<HTMLInputElement>, value: string) => {

        setDropDownData((previous: any) =>
            previous?.map((element: any, index: number) => {
                if (element?.label === value) {
                    return { ...element, isChecked: !element?.isChecked }
                }
                else {
                    return element
                }
            })
        )
    }

    return (
        <div>
            <div>
                {!isDropDownOpen? dropDownData?.map((element, index) => {

                    return (
                        element?.isChecked ? <span key={index}>{element?.value}</span> : ""

                    )
                }):""}
            </div>
            <div>
                <div onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>Click here to open</div>
                {
                    isDropDownOpen ? dropDownData?.map((element, id) => {
                        return (
                            <div key={element.label}>
                                <input type="checkbox" id={element.label}  checked={element?.isChecked} value={element.value} onChange={(event) => handleInputCheckBox(event, element?.label)} />
                                <label htmlFor={element.label}>{element.label}</label>
                            </div>
                        )
                    }) : ""
                }
            </div>



        </div>
    )
}