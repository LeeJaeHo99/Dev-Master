export default function FlexJustify({
    clickSetJustify,
    RadioGroup,
    RadioGroupItem,
    Label,
}) {
    return (
        <RadioGroup defaultValue="center">
            <div className="mb-2 text-xl font-bold">Justify - Content</div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("start");
                }}
            >
                <RadioGroupItem value="flex-start" id="justify-start" />
                <Label htmlFor="justify-start">flex-start</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("end");
                }}
            >
                <RadioGroupItem value="flex-end" id="justify-end" />
                <Label htmlFor="justify-end">flex-end</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("center");
                }}
            >
                <RadioGroupItem value="center" id="justify-center" />
                <Label htmlFor="justify-center">center</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("around");
                }}
            >
                <RadioGroupItem value="space-around" id="space-around" />
                <Label htmlFor="space-around">space-around</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("between");
                }}
            >
                <RadioGroupItem value="space-between" id="space-between" />
                <Label htmlFor="space-between">space-between</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetJustify("evenly");
                }}
            >
                <RadioGroupItem value="space-evenly" id="space-evenly" />
                <Label htmlFor="space-evenly">space-evenly</Label>
            </div>
        </RadioGroup>
    );
}
