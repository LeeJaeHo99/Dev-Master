import Greeting from './Greeting';
import { SidebarTrigger } from "@/components/ui/sidebar";
// import GradeProgress from './GradeProgress';

export default function Header(){
    return(
        <header className='flex items-center justify-between gap-10 w-full h-auto p-4 pr-9 pl-0 border-b-[1px]'>
            <SidebarTrigger className='ml-2'/>
            <Greeting/>
            {/* <GradeProgress/> */}
        </header>
    );
}