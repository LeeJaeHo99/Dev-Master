import Link from "next/link";
import { Home } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    // BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";

function HomeIcon(){
    return(
        <Home width={16} height={16}/>
    );
}

export default function BreadcrumbContent() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/" className="flex items-center justify-center gap-2">
                            <HomeIcon/>
                            <span>Home</span>
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/" className="flex items-center justify-center gap-2">
                            <HomeIcon/>
                            <span>Home</span>
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem> */}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
