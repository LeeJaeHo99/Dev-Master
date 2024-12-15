import CalendarComponent from '@/components/main/section/calendar-section/Calendar-component';
import GoalComponent from '@/components/main/section/goal-section/GoalComponent';
import AnnounceComponent from '@/components/main/section/announce-section/AnnounceComponent';
import NoticeComponent from '@/components/main/section/notice-section/NoticeComponent';
import StudyComponent from '../components/main/section/study-section/StudyComponent';
import ChartComponent from '../components/main/section/chart-section/ChartComponent';
import TestAndPra from '../components/main/section/testANDpra/TestAndPra';

export default function Home() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <section className="calendar-section rounded-xl bg-muted/50">
                    <CalendarComponent/>
                </section>
                <section className="goal-section rounded-xl bg-muted/50">
                    <GoalComponent/>
                </section>
                <section className="notice-section rounded-xl bg-muted/50">
                    <NoticeComponent/>
                </section>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <section className="announce-section rounded-xl bg-muted/50">
                    <AnnounceComponent/>
                </section>
                <section className="chart-section aspect-video rounded-xl bg-muted/50">
                    <ChartComponent/>
                </section>
                <section className="study-section aspect-video rounded-xl bg-muted/50">
                    <StudyComponent/>
                </section>
                <section className="testNPra-section aspect-video rounded-xl bg-muted/50">
                    <TestAndPra/>
                </section>
            </div>
        </div>
    );
}