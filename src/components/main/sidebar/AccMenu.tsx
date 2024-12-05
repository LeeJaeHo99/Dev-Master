'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useSidebar } from "@/components/ui/shadcn/sidebar";
import { Brush } from "lucide-react";
import Link from 'next/link';

function BrushIcon() {
    const {
        open,
        // openMobile,
    } = useSidebar();

    return (
        <div className="flex gap-2">
            <Brush width={16} height={16} />
            <span className={`${!open && 'open-false'}`}>CSS 연습</span>
        </div>
    );
}

export default function AccMenu() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <BrushIcon />
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                    <Link className="block mb-2 text-[13px] hover:font-bold" href="/practice/flex">- Flex</Link>
                    <Link className="block text-[13px] hover:font-bold" href="/practice/style">- Style</Link>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
