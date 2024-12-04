"use client";

import { useSidebar } from "@/components/ui/shadcn/sidebar";
import { SidebarHeader } from "@/components/ui/shadcn/sidebar";
import Logo from '../../ui/Logo';


export default function SidebarHead() {
    const {
        open,
        // openMobile,
    } = useSidebar();

    return (
        <SidebarHeader className={`${!open && "open-false"}`}>
            <div
                className={`logo-wrap flex items-center justify-start gap-2 p-2 `}
            >
                <Logo/>
                <span className="text-mainColor text-lg font-semibold">
                    Dev Master
                </span>
            </div>
        </SidebarHeader>
    );
}
