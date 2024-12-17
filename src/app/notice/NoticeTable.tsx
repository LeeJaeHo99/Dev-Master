import Link from 'next/link';
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

export default async function NoticeTable() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`);
    const result = await response.json();
    const noticeData = result.data;
    console.log('noticeData: ', noticeData);

    return (
        <Table className="mt-20">
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[80px] text-center">번호</TableHead>
                    <TableHead className="w-[80px] text-center">구분</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead className="w-[120px] text-right">작성일자</TableHead>
                    <TableHead className="w-[120px] text-right">작성자</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {noticeData.map((data: NoticeType, i: number) => {
                    return (
                        <TableRow className="h-12" key={data._id}>
                            <TableCell className="w-[80px] font-medium text-center">{i + 1}</TableCell>
                            <TableCell className="w-[80px] text-center">{data.sort}</TableCell>
                            <TableCell>
                                <Link href={'/'}>
                                    {data.content}
                                </Link>
                            </TableCell>
                            <TableCell className="text-right">{data.date}</TableCell>
                            <TableCell className="text-right">{data.author}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
