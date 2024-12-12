import StudyProgress from './StudyProgress';

export default function StudyComponent() {
    return (
        <div className="p-8">
            <h3 className="mb-4 text-2xl font-semibold">✏️ 공부</h3>
            <StudyProgress/>
        </div>
    );
}