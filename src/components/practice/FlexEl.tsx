import PracticeBox from './PracticeBox';

export default function FlexEl(){
    return(
        <div className='flex items-center justify-center h-full'>
            <PracticeBox display={'box'}/>
            <PracticeBox display={'box'}/>
            <PracticeBox display={'box'}/>
        </div>
    );
}