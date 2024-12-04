import Header from "@/components/main/header/Header";
import Footer from '../components/main/footer/Footer';

export default function Home() {
    return (
        <main className="flex justify-between flex-col w-full">
            <Header />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <section className="calendar-section aspect-video rounded-xl bg-muted/50"></section>
                    <section className="study-section rounded-xl bg-muted/50"></section>
                    <section className="test-section aspect-video rounded-xl bg-muted/50"></section>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <section className="announce-section aspect-video rounded-xl bg-muted/50"></section>
                    <section className="notice-section aspect-video rounded-xl bg-muted/50"></section>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
