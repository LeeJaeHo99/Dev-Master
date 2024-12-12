import { mockStudyData } from "@/mock/mock";
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
                            <div className="relative w-[95%] h-4 bg-mainColor30 rounded-lg">
                                <div className={`progress-status absolute top-0 left-0 h-full bg-mainColor rounded-lg`} style={{width: `${data.progress}%`}}></div>
                            </div>
                            <span className="text-sm text-right">진도율 <span className="text-[12px] text-gray-400">({data.progress}%)</span></span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
