import { mockStudyData } from "@/mock/mock";
console.log("mockStudyData: ", mockStudyData);
import Image from "next/image";

const showStudyData = mockStudyData.slice(-4);

export default function StudyProgress() {
    return (
        <div className="mt-12">
            {showStudyData.map((data, i) => {
                return (
                    <div
                        key={data.subject + i}
                        className="flex items-center justify-between mb-4"
                    >
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src={`/images/subject/${data.subject}.png`}
                                width={32}
                                height={32}
                                alt="skill-icon"
                            />
                            <p className="font-semibold">{data.subject}</p>
                        </div>
                        <div className="progress-bar--wrap flex items-center gap-2 w-3/5">
                            <div className="relative w-4/5 h-4 bg-slate-400 rounded-lg">
                                <div className={`progress-status absolute top-0 left-0 w-[${data.progress}%] h-full bg-white rounded-lg`}></div>
                            </div>
                            <p className="text-sm">진도율 ({data.progress}%)</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
