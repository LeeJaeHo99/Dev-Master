import Link from 'next/link';
export default function ViewMoreBtn({link}){
    return(
        <button className='px-2 py-[2px] bg-[#f2f2f2] rounded-lg border border-[#ddd]'>
            <Link href={`/${link}`} className='text-[12px] transition-all hover:font-bold'>더보기</Link>
        </button>
    );
}