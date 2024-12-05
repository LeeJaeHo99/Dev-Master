type PracticeBoxProps = {display: string};

export default function PracticeBox({display}: PracticeBoxProps){
    return(
        <div className={`flex items-center justify-center w-64 h-40 rounded-lg bg-slate-400 text-2xl font-bold text-white`}>
            {display}
        </div>
    );
}