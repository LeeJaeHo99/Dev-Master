"use client";

type PracticeBoxProps = {
    shrinkNum: number;
    growNum: number;
};

export default function PracticeBox({ shrinkNum, growNum }: PracticeBoxProps) {
    return (
        <div
            className={`
                flex items-center justify-center 
                shrink-${shrinkNum} grow-${growNum} 
                w-40 h-24 
                rounded-lg bg-slate-400 
                text-2xl font-bold text-white`}
        >
            Box
        </div>
    );
}
