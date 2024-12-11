'use client';

import { useState } from "react";
import { Checkbox } from "@/components/ui/shadcn/checkbox";

function CheckBoxEl({data, i, noneClick}){
    return(
        <div className="py-3 pl-4 items-top flex space-x-2 border-b-[1px]" onClick={noneClick}>
            <Checkbox id={`goal${i}`} />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={`goal${i}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
                >
                    {data}
                </label>
            </div>
        </div>
    );
}

export default function GoalCheckBox({data, i}) {
    const [none, setNone] = useState(true);
    const noneClick = () => {
        setTimeout(() => {
            setNone(false);
        }, 1000)
    }
    
    return (
        none && <CheckBoxEl data={data} i={i} noneClick={noneClick}/>
    );
}