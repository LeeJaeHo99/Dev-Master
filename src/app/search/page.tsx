'use client';

import { useSearchParams } from "next/navigation";

export default function SearchPage(){
    const searchParams = useSearchParams();
    const q = searchParams.get('q');
    return(
        <div>{q}</div>
    );
}