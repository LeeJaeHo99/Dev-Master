import Header from "@/components/main/header/Header";

export default function Home() {
    return (
        <main className="w-full">
            <Header />
            <div className="main-section">
                <section className="mid-section flex items-center justify-between w-full">
                    <section className="calendar w-1/2">study</section>
                    <div className="mid-right--section flex items-center justify-between w-1/2">
                        <div className="study border-2">study</div>
                        <div className="test border-2">study</div>
                    </div>
                </section>
                <section className="bot-section flex items-center justify-between w-full">
                    <section className="calendar w-1/2">test</section>
                    <div className="bot-right--section flex items-center justify-between w-1/2">
                        <div className="study border-2">study</div>
                        <div className="test border-2">study</div>
                    </div>
                </section>
            </div>
        </main>
    );
}
