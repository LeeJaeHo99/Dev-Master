'use client';

import { Search } from "lucide-react";

function SearchIcon(){
    return(
        <Search color="white" width={24} height={24}/>
    );
}

export default function SearchBar(){
    return(
        <div className="flex items-center justify-start gap-3 absolute top-[30%] left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] w-[640px] h-14 pl-6 bg-[#484848] rounded-2xl border-white shadow-common hidden">
            <SearchIcon/>
            <input className="w-full h-full bg-transparent text-xl text-white outline-none" type="text" placeholder="검색어를 입력해주세요."/>
        </div>
    );
}