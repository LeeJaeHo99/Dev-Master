import Link from "next/link";
import ViewMoreBtn from '../../../ui/ViewMoreBtn';
import { mockAnnounceData } from "../../../../mock/mock";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table";

const showAnnounceData = mockAnnounceData.slice(-5).reverse();

function MainAnnouncTable() {
    return (
        <Table className="mt-4">
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[60px] ">회사</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead className="w-[100px] ">마감일자</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {showAnnounceData.map((data, i) => {
                    return (
                        <TableRow className="h-12" key={i}>
                            <TableCell className="company-name--announce">{data.company}</TableCell>
                            <TableCell>
                                <Link href={"/"}>{data.text}</Link>
                            </TableCell>
                            <TableCell className="">{data.date}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default function AnnounceComponent() {
    return (
        <div className="p-8">
            <div className='flex items-start justify-between'>
                <h3 className="mb-4 text-2xl font-semibold">💼 공고</h3>
                <ViewMoreBtn link={''}/>
            </div>
            <MainAnnouncTable/>
        </div>
    );
}
