'use client';

import PracticeStyleBox from '../PracticeStyleBox';
import { cssPracticeState } from '@/types/types'
import { useSelector } from 'react-redux';



export default function StyleEl(){
    const width = useSelector((state: cssPracticeState) => state.width);
    const height = useSelector((state: cssPracticeState) => state.height);

    return(
        <div className="flex items-center justify-center w-full h-fullwidth: 80px">
            <PracticeStyleBox width={width} height={height}/>
        </div>
    );
}