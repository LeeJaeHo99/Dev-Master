"use client";

import { Search, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "@/store/store";
import { useRouter } from "next/navigation";

function SearchBarComponent({displayNone}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const escKeyDown = (e) => {
        if(!displayNone) return;
        if(e.key === 'Escape'){
            dispatch(setDisplay(!displayNone));
        }
    }
    const enterDown = (e) => {
        if(!displayNone) return;
        const searchText = e.target.value;
        if(e.key === 'Enter'){
            router.push(`/search?q=${searchText}`)
        }
    }


    return (
        <div className="flex items-center justify-start gap-3 fixed top-[40%] left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] w-[640px] h-14 pl-6 bg-[#484848] rounded-2xl border-white shadow-common" onKeyDown={escKeyDown}>
            <Search color="white" width={24} height={24} />
            <input
                className="w-full h-full bg-transparent text-xl text-white outline-none"
                type="text"
                placeholder="검색어를 입력해주세요."
                autoFocus
                onKeyDown={enterDown}
            />
            <div className="absolute top-[8px] right-0 w-7 h-7 bg-transparent rounded-full opacity-50 cursor-pointer" onClick={() => {dispatch(setDisplay(!displayNone))}}>
                <X width={18} height={18} color="white"/>
            </div>
        </div>
    );
}

export default function SearchBar() {
    type setDisplay = string;
    const displayNone = useSelector((state: setDisplay) => state.displayNone);

    return displayNone && <SearchBarComponent displayNone={displayNone}/>
}
