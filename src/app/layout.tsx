import type { Metadata } from "next";
import "@/styles/globals.css";
import { SidebarProvider } from "@/components/ui/shadcn/sidebar";
import { AppSidebar } from "@/components/main/sidebar/AppSidebar";
import Header from "@/components/main/header/Header";
import Footer from '../components/main/footer/Footer';

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
                    <main className="flex justify-between flex-col w-full">
                    <Header />
                    {children}
                    <Footer/>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
