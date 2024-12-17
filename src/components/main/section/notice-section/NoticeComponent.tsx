import Link from 'next/link';
import ViewMoreBtn from '../../../ui/ViewMoreBtn';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table";


type NoticeType = {
    [key: string] : string;
}

async function NoticeComponentTable(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`);
    const result = await response.json();
    const noticeData = result.data;
    const mainTableData = noticeData.slice(-3).reverse();

    return(
        <Table className="mt-1">
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[60px] ">작성자</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead className="w-[100px] ">작성일자</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mainTableData.map((data: NoticeType) => {
                    return (
                        <TableRow className="h-12" key={data._id}>
                            <TableCell className="">{data.author}</TableCell>
                            <TableCell>
                                <Link href={'/'}>
                                    {data.content}
                                </Link>
                            </TableCell>
                            <TableCell className="">{data.date}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default function NoticeComponent() {
    return (
        <div className="p-5">
            <div className='flex items-start justify-between'>
                <h3 className="mb-4 text-xl font-semibold">📢 공지사항</h3>
                <ViewMoreBtn link={''}/>
            </div>
            <NoticeComponentTable/>
        </div>
    );
}
