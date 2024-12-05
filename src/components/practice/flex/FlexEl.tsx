'use client';

import PracticeBox from '../PracticeBox';
import { useSelector } from 'react-redux';
import { cssPracticeState } from '@/types/types'

export default function FlexEl(){
    const items = useSelector((state: cssPracticeState) => state.items);
    const justify = useSelector((state: cssPracticeState) => state.justify);
    const gap = useSelector((state: cssPracticeState) => state.gap);
    const direction = useSelector((state: cssPracticeState) => state.direction);
    const shrink = useSelector((state: cssPracticeState) => state.shrink);
    const grow = useSelector((state: cssPracticeState) => state.grow);

    return(
        <div className={`flex items-${items} justify-${justify} gap-${gap} flex-${direction} h-full`}>
            <PracticeBox display={'box'} shrinkNum={shrink[0]} growNum={grow[0]}/>
            <PracticeBox display={'box'} shrinkNum={shrink[1]} growNum={grow[1]}/>
            <PracticeBox display={'box'} shrinkNum={shrink[2]} growNum={grow[2]}/>
        </div>
    );
}