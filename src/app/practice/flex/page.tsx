import FlexEl from '@/components/practice/FlexEl';
import FlexStyle from '@/components/practice/FlexStyle';

export default function PracticeFlex() {
    return (
        <div className="w-full h-full">
            <div className="inner flex flex-col gap-4 w-full h-full max-w-[none] p-4">
                <div className="practice-section w-full h-3/5 rounded-xl bg-muted/50">
                    <FlexEl/>
                </div>
                <div className="code-section w-full h-2/5 rounded-xl bg-muted/50">
                    <FlexStyle/>
                </div>
            </div>
        </div>
    );
}
