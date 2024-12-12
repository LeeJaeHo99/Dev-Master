'use client';

import { SidebarFooter } from "@/components/ui/shadcn/sidebar";
import { useSidebar } from "@/components/ui/shadcn/sidebar";
import UserGrade from '@/components/ui/userGrade';
import UserImg from '../../ui/userImg';

function Profile() {
    return (
        <div className="profile-wrap flex items-center gap-3">
            <UserImg/>
            <div className="progile-text--wrap">
                <div className="flex items-center justify-start gap-4 mb-1">
                    <span className="user-name font-bold">이재호</span>
                    <UserGrade/>
                </div>
                <div className="user-id">ljh2735294@naver.com</div>
            </div>
        </div>
    );
}

export default function SidebarFoot() {
    const {
        open,
        // openMobile,
    } = useSidebar();

    return (
        <SidebarFooter className={`p-4 ${!open && 'open-false'}`}>
            <Profile/>
        </SidebarFooter>
    );
}
