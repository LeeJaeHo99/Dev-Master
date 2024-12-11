import CalendarComponent from '@/components/main/section/calendar-section/Calendar-component';
import GoalComponent from '../components/main/section/goal-section/GoalComponent';

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
                <section className="announce-section rounded-xl bg-muted/50">
                
                </section>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <section className="community-section aspect-video rounded-xl bg-muted/50">
                
                </section>
                <section className="study-section aspect-video rounded-xl bg-muted/50">
                
                </section>
            </div>
        </div>
    );
}