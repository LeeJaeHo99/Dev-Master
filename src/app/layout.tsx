import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/main/sidebar/AppSidebar";

export const metadata: Metadata = {
    title: "Dev Master",
    description: "Dev Master",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger className="ml-2"/>
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
