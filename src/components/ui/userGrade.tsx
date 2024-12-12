export default function UserGrade(){
    const grade = [
        {
            text: '초보',
            color: '#fca5a5'
        },
        {
            text: '중수',
            color: '#86efac'
        },
        {
            text: '고수',
            color: '#93c5fd'
        },
        {
            text: '마스터',
            color: '#d8b4fe'
        },
    ];
    return(
        <div className={`user-grade p-1 px-2 rounded-sm text-xs font-semibold text-white`} style={{backgroundColor: `${grade[3].color}`}}>
            {grade[3].text}
        </div>
    );
}