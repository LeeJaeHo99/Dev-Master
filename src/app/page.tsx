import CalendarComponent from '@/components/main/section/calendar-section/Calendar-component';

export default function Home() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <section className="calendar-section rounded-xl bg-muted/50">
                    <CalendarComponent/>
                </section>
                <section className="study-section rounded-xl bg-muted/50"></section>
                <section className="test-section rounded-xl bg-muted/50"></section>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <section className="announce-section aspect-video rounded-xl bg-muted/50"></section>
                <section className="notice-section aspect-video rounded-xl bg-muted/50"></section>
            </div>
        </div>
    );
}