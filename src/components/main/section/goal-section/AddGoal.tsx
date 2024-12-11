'use client';

import { Plus } from "lucide-react";
import { useState } from 'react';
import SmallBtn from '../../../ui/SmallBtn';

function AddGoalInput({addGoalClick}){
    return(
        <div className="flex items-center justify-start gap-2 w-full">
            <input className="w-4/5 p-2 bg-gray-200 rounded-md text-xs outline-none" type="text" placeholder="추가하실 목표를 작성해주세요."/>
            <SmallBtn text={'추가'} onClick={addGoalClick}/>
        </div>
    );
}

function GoalContent({addGoalClick}){
    return(
        <>
            <Plus color='#9cafa3' width={18} height={18}/>
            <span className="ml-2 text-gray-400" onClick={addGoalClick}>목표 추가하기</span>
        </>
    );
}

export default function AddGoal(){
    const [addGoal, setAddGoal] = useState(true);
    const addGoalClick = () => {
        setAddGoal(!addGoal);
    }

    return(
        <div className="flex items-center justify-center mt-3 cursor-pointer">
            {
                addGoal ? <GoalContent addGoalClick={addGoalClick}/> : <AddGoalInput addGoalClick={addGoalClick}/>
            }
        </div>
    );
}