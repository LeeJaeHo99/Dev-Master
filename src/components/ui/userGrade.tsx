export default function UserGrade(){
    enum Grade{
        Beginner = '초보',
        Middle = '중수',
        Higher = '고수',
        Master = '마스터',
    }

    const grade = [
        {
            text: Grade.Beginner,
            color: '#fca5a5'
        },
        {
            text: Grade.Middle,
            color: '#86efac'
        },
        {
            text: Grade.Higher,
            color: '#93c5fd'
        },
        {
            text: Grade.Master,
            color: '#d8b4fe'
        },
    ];
    return(
        <div className="user-grade p-1 px-2 rounded-sm text-xs font-semibold text-white cursor-pointer" style={{backgroundColor: `${grade[3].color}`}}>
            {grade[3].text}
        </div>
    );
}