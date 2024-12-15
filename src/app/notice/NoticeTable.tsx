import { mockTableData } from '../../mock/mock';
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

export default function NoticeTable() {
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
                {mockTableData.map((data, i) => {
                    return (
                        <TableRow className="h-12" key={i}>
                            <TableCell className="w-[80px] font-medium text-center">{i + 1}</TableCell>
                            <TableCell className="w-[80px] text-center">{data.sort}</TableCell>
                            <TableCell>
                                <Link href={'/'}>
                                    {data.title}
                                </Link>
                            </TableCell>
                            <TableCell className="text-right">{data.date}</TableCell>
                            <TableCell className="text-right">{data.writer}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
