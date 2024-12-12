export default function UserGrade(){
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
        <div className={`user-grade p-1 px-2 bg-${grade[1].color}-300 rounded-sm text-xs font-semibold text-white`}>
            {grade[1].text}
        </div>
    );
}