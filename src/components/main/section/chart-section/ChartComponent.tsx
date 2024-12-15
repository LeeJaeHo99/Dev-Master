import { AbilityChart } from './AbilityChart';

export default function ChartComponent() {
    return (
        <div className="p-8">
            <div className='flex items-center'>
                <h3 className="mb-4 text-2xl font-semibold">📈 실력 향상 그래프</h3>
                <span className="ml-2 text-xs font-normal text-gray-400">(최근 6개월간의 목표와 성고를 보여드립니다.)</span>
            </div>
            <AbilityChart/>
        </div>
    );
}
