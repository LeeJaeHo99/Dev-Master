import { Wrench } from "lucide-react";
import Link from "next/link";

export default function PraComponent(){
    return(
        <div className="flex items-start justify-between flex-col w-1/2 h-full p-6 bg-gray-100 rounded-xl">
            <h2 className="mb-2 text-xl font-semibold">⭐️ CSS 연습</h2>
            <Link href={'/'} className="flex items-center justify-center flex-col gap-2 w-full h-full max-h-[160px] bg-mainColor70 rounded-xl">
                <Wrench color="white" width={36} height={36}/>
                <span className='text-xl font-bold text-white'>페이지 이동</span>
            </Link>
        </div>
    );
}