import Logo from "../../ui/Logo";
import SiteInfo from './SiteInfo';

export default function Footer() {
    return (
        <footer className="flex items-center justify-between gap-10 w-full h-auto p-4 pr-9 pl-6 border-t-[1px]">
            <div className="logo-wrap flex items-center justify-center gap-2">
                <Logo />
                <span className="text-mainColor text-lg font-semibold">
                    Dev Master
                </span>
            </div>
            <SiteInfo/>
        </footer>
    );
}