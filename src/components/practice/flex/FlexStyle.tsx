"use client";

import { Label } from "@/components/ui/shadcn/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { useDispatch } from "react-redux";
import { setItems, setJustify, setGap, setDirection, setShrink, setGrow } from "@/store/store";
import { clickCss } from "@/types/types";
import FlexItems from "./FlexItems";
import FlexJustify from './FlexJustify';
import FlexGap from './FlexGap';
import FlexDirection from './FlexDirection';
import FlexShrink from './FlexShrink';
import FlexGrow from './FlexGrow';

export default function FlexStyle() {
    const dispatch = useDispatch();
    const clickSetItems = (css: clickCss) => {
        dispatch(setItems(css));
    };
    const clickSetJustify = (css: clickCss) => {
        dispatch(setJustify(css));
    };
    const clickSetGap = (css: clickCss) => {
        dispatch(setGap(css));
    };
    const clickSetDirection = (css: clickCss) => {
        dispatch(setDirection(css));
    };
    const clickSetShrink = (css: clickCss) => {
        dispatch(setShrink(css));
    };
    const clickSetGrow = (css: clickCss) => {
        dispatch(setGrow(css));
    };

    return (
        <div className="flex justify-around h-full p-10">
            <FlexItems
                clickSetItems={clickSetItems}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <FlexJustify
                clickSetJustify={clickSetJustify}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <FlexGap
                clickSetGap={clickSetGap}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <FlexDirection
                clickSetDirection={clickSetDirection}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <FlexShrink
                clickSetShrink={clickSetShrink}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
            <FlexGrow
                clickSetGrow={clickSetGrow}
                RadioGroup={RadioGroup}
                RadioGroupItem={RadioGroupItem}
                Label={Label}
            />
        </div>
    );
}
