import SidebarHead from './SidebarHead';
import SidebarFoot from './SidebarFoot';
import { Home, Search, Settings, Siren, Contact, Users, Megaphone, Code2, Pencil } from "lucide-react";

import AccMenu from './AccMenu';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/shadcn/sidebar";

// Menu items.
const items1 = [
    {
        title: "홈",
        url: "/",
        icon: Home,
    },
    {
        title: "공지사항",
        url: "/notice",
        icon: Megaphone,
    },
    {
        title: "검색",
        url: "/",
        icon: Search,
    },
    {
        title: "공부",
        url: "/",
        icon: Code2,
    },
    {
        title: "테스트",
        url: "/",
        icon: Pencil,
    },
];

const items2 = [
    {
        title: "커뮤니티",
        url: "/",
        icon: Users,
    },
    {
        title: "구인공고",
        url: "/",
        icon: Contact,
    },
    // {
    //     title: "받은 편지함",
    //     url: "/",
    //     icon: Inbox,
    // },
    {
        title: "신고하기",
        url: "/",
        icon: Siren,
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
                            {items1.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <AccMenu/>
                            {items2.map((item) => (
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
