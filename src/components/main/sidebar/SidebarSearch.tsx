"use client";

import { setDisplay } from "@/store/store";
import { Search } from "lucide-react";
import {
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/shadcn/sidebar";
import { useDispatch, useSelector } from "react-redux";

export default function SearchMenu() {
    type setDisplay = string;
    const dispatch = useDispatch();
    const displayNone = useSelector((state: setDisplay) => state.displayNone);


    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <div className="flex gap-2 p-2" onClick={() => {dispatch(setDisplay(!displayNone))}}>
                    <Search width={16} height={16} />
                    <span>검색</span>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
