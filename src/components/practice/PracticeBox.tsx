'use client';

import { useSelector } from 'react-redux';
import { cssPracticeState } from '@/types/types';
type PracticeBoxProps = {
    display: string,
    shrinkNum: number,
    growNum: number,
};

export default function PracticeBox({display, shrinkNum, growNum}: PracticeBoxProps){
    const shrink = useSelector((state: cssPracticeState) => state.shrink);
    const grow = useSelector((state: cssPracticeState) => state.grow);

    return(
        <div className={`flex items-center justify-center shrink-${shrinkNum} grow-${growNum} w-56 h-32 rounded-lg bg-slate-400 text-2xl font-bold text-white`}>
            {display}
        </div>
    );
}