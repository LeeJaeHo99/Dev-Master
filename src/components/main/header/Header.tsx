import UserInfo from "./userInfo";
import { SidebarTrigger } from "@/components/ui/shadcn/sidebar";
// import GradeProgress from './GradeProgress';
import BreadcrumbContent from "./BreadcrumbContent";
import GapLine from '../../ui/GapLine';

export default function Header() {
    return (
        <header className="flex items-center justify-between gap-10 sticky top-0 z-[999] w-full h-auto p-2 pr-9 pl-2 bg-white border-b-[1px]">
            <div className="flex items-center justify-center gap-4">
                <SidebarTrigger className="justify-end gap-0"/>
                <GapLine/>
                <BreadcrumbContent />
            </div>
            <UserInfo />
            {/* <GradeProgress/> */}
        </header>
    );
}
