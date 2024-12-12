import { mockGoalData } from "@/mock/mock";
import GoalCheckBox from './GoalCheckBox';
import AddGoal from './AddGoal';

export default function GoalComponent() {
    return (
        <div className="p-5">
            <h3 className="mb-4 text-xl font-semibold">
                📍 나의 목표
                <span className="ml-2 text-xs font-normal text-gray-400">
                    (최대 5개까지 저장 가능합니다.)
                </span>
            </h3>
            {mockGoalData.map((data, i) => <GoalCheckBox key={i} data={data} i={i}/>)}
            {mockGoalData.length === 5 || <AddGoal/>}
        </div>
    );
}
