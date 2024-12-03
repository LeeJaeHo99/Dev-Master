export default function GradeProgress(){
    const grade = [
        {
            text: '초보',
            color: 'red'
        },
        {
            text: '중수',
            color: 'green'
        },
        {
            text: '고수',
            color: 'blue'
        },
        {
            text: '마스터',
            color: 'purple'
        },
    ];

    return(
        <div className="flex items-start justify-end gap-4 min-w-60">
            <div className="now-grade--wrap text-end">
                <span className="text-sm text-gray-500">현재 등급</span>
                <div className="p-1 px-2 bg-red-300 rounded-sm text-xs font-semibold text-white text-center">{grade[0].text}</div>
            </div>
            <div className="next-grade--wrap w-[60%] text-end">
                <div className="text-sm text-gray-500">다음 등급까지</div>
                <div className="progress-bar--wrap">
                    <div className="progress-bar--bg relative w-full h-6 bg-gray-200 rounded-md overflow-hidden">
                        <div style={{width: '47%'}} className={`progress-bar absolute top-0 left-0 h-full bg-${grade[1].color}-300`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}