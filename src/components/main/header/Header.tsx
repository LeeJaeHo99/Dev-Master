import Greeting from './Greeting';
// import GradeProgress from './GradeProgress';

export default function Header(){
    return(
        <header className='flex items-center justify-end gap-10 w-full h-auto p-4 pr-9'>
            <Greeting/>
            {/* <GradeProgress/> */}
        </header>
    );
}