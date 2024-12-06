import StyleEl from '../../../components/practice/style/StyleEl';
import StyleStyle from '../../../components/practice/style/StyleStyle';

export default function PracticeStyle() {
    return (
        <div className="w-full h-full">
            <div className="inner flex flex-col gap-4 w-full h-full max-w-[none] p-4">
                <div className="practice-section flex items-center justify-center w-full h-3/5 rounded-xl bg-muted/50">
                    <StyleEl/>
                </div>
                <div className="code-section w-full h-2/5 rounded-xl bg-muted/50">
                    <StyleStyle/>
                </div>
            </div>
        </div>
    );
}

//width, height, border, bg, font, opacity