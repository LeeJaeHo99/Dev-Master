'use client';

import { SidebarFooter } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import Image from 'next/image';
import UserGrade from './userGrade';

function Profile() {
    return (
        <div className="profile-wrap flex items-center gap-3">
            <div className="profile-img--wrap">
                <Image
                    className="rounded-md object-cover"
                    src={'/images/profile.jpeg'}
                    width={40}
                    height={40}
                    alt='profile-img'
                />
            </div>
            <div className="progile-text--wrap">
                <div className="flex items-center justify-start gap-2 mb-1">
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
