import StudyProgress from './StudyProgress';
import ViewMoreBtn from '../../../ui/ViewMoreBtn';

export default function StudyComponent() {
    return (
        <div className="p-8">
            <div className='flex items-start justify-between'>
                <div className='flex items-center'>
                    <h3 className="mb-2 text-2xl font-semibold">✏️ 공부</h3>
                    <span className="ml-2 text-xs font-normal text-gray-400">(최근 공부한 과목 4개까지 보여줍니다.)</span>
                </div>
                <ViewMoreBtn link={''}/>
            </div>
            <StudyProgress/>
        </div>
    );
}