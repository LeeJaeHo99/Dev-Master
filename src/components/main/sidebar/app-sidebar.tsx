import SidebarHead from './sidebar-head';
import SidebarFoot from './sidebar-foot';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "홈",
        url: "/",
        icon: Home,
    },
    {
        title: "검색",
        url: "/",
        icon: Search,
    },
    {
        title: "받은 편지함",
        url: "/",
        icon: Inbox,
    },
    {
        title: "캘린더",
        url: "/",
        icon: Calendar,
    },
    {
        title: "설정",
        url: "/",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHead/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFoot/>
        </Sidebar>
    );
}
