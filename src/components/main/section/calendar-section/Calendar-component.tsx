'use client'

import { ko } from "date-fns/locale";
import { Calendar } from "@/components/ui/shadcn/calendar";
import { useState } from "react";

export default function CalendarComponent() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
            locale={ko}
        />
    );
}

// [&:nth-child(7n+1)]:text-red-500