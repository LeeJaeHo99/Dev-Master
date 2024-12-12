import Link from 'next/link';
import { mockTableData } from '../../../../mock/mock';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table";

const mainTableData = mockTableData.slice(-3);
console.log('mainTableData: ', mainTableData);

function NoticeComponentTable(){
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
            {mainTableData.map((data, i) => {
                return (
                    <TableRow className="h-12" key={i}>
                        <TableCell className="">{data.writer}</TableCell>
                        <TableCell>
                            <Link href={'/'}>
                                {data.title}
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
            <h3 className="mb-4 text-xl font-semibold">공지사항</h3>
            <NoticeComponentTable/>
        </div>
    );
}
