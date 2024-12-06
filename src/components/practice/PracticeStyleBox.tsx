type PracticeBoxProps = {
    width: number;
    height: number;
};

export default function PracticeStyleBox({ width, height }: PracticeBoxProps) {

    return (
        <div
            className={`
                flex items-center justify-center 
                w-${width} h-${height} 
                rounded-lg bg-slate-400 
                text-2xl font-bold text-white`}
        >
            Box
        </div>
    );
}
