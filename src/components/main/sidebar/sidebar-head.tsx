"use client";

import { Crown } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarHeader } from "@/components/ui/sidebar";

function Logo(){
    return(
        <Crown width={20} height={20} color="white"/>
    );
}

export default function SidebarHead() {
    const {
        open,
        // openMobile,
    } = useSidebar();
    console.log("open: ", open);

    return (
        <SidebarHeader className={`${!open && "open-false"}`}>
            <div
                className={`logo-wrap flex items-center justify-start gap-2 p-2 `}
            >
                <div className="icon-wrap bg-mainColor p-[5px] rounded-sm">
                    <Logo/>
                </div>
                <span className="text-mainColor text-lg font-semibold">
                    Dev Master
                </span>
            </div>
        </SidebarHeader>
    );
}
