import ViewMoreBtn from '../../../ui/ViewMoreBtn';

export default function TestComponent(){
    return(
        <div className="p-8">
            <div className='flex items-start justify-between'>
                <h3 className="mb-4 text-2xl font-semibold">📚 테스트</h3>
                <ViewMoreBtn link={''}/>
            </div>
        </div>
    );
}