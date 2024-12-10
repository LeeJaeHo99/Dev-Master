import NoticeTable from './NoticeTable';

export default function NoticePage(){
    return(
        <section className="h-full p-14">
            <h2 className="text-3xl font-bold">공지사항</h2>
            <NoticeTable/>
        </section>
    )
}