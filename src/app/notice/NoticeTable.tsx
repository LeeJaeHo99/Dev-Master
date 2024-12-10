import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table";

interface tableData {
    sort: string;
    text: string;
    date: string;
    writer: string;
}
const mockTableData: tableData[] = [
    {
        sort: "긴급",
        text: "안녕하세요 운영자 입니다.",
        date: "2019-05-19",
        writer: "운영자",
    },
    {
        sort: "공지",
        text: "안녕하세요 운영자 입니다할렐루야.",
        date: "2019-05-19",
        writer: "운영자",
    },
];

export default function NoticeTable() {
    return (
        <Table className="mt-20">
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">번호</TableHead>
                    <TableHead className="w-[120px]">구분</TableHead>
                    <TableHead>내용</TableHead>
                    <TableHead className="w-[120px] text-right">
                        작성일자
                    </TableHead>
                    <TableHead className="w-[120px] text-right">
                        작성자
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockTableData.map((data, i) => {
                    return (
                        <TableRow className="h-12" key={i}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{data.sort}</TableCell>
                            <TableCell>{data.text}</TableCell>
                            <TableCell className="text-right">{data.date}</TableCell>
                            <TableCell className="text-right">{data.writer}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
