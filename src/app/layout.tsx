import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarProvider } from "@/components/ui/shadcn/sidebar";
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
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
