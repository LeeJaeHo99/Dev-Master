import StudyProgress from './StudyProgress';
import ViewMoreBtn from '../../../ui/ViewMoreBtn';

export default function StudyComponent() {
    return (
        <div className="p-8">
            <div className='flex items-start justify-between'>
                <h3 className="mb-4 text-2xl font-semibold">✏️ 공부</h3>
                <ViewMoreBtn link={''}/>
            </div>
            <StudyProgress/>
        </div>
    );
}