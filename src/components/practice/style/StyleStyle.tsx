'use client';

import { Label } from "@/components/ui/shadcn/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { useDispatch } from "react-redux";
import { setWidth, setHeight } from "@/store/store";
import StyleWidth from './StyleWidth';
import StyleHeight from './StyleHeight';
import { clickCss } from "@/types/types";

export default function StyleStyle(){
    const dispatch = useDispatch();
    const clickSetWidth = (css: clickCss) => {
        dispatch(setWidth(css))
    }
    const clickSetHeight = (css: clickCss) => {
        dispatch(setWidth(css))
    }
    return(
        <div className="flex justify-around h-full p-10 h-">
            <StyleWidth
                clickSetWidth={clickSetWidth}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <StyleHeight
                clickSetHeight={clickSetHeight}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
        </div>
    );
}