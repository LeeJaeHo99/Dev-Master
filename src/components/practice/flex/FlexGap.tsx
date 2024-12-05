export default function FlexGap({
    clickSetGap,
    RadioGroup,
    RadioGroupItem,
    Label,
}) {
    return (
        <RadioGroup defaultValue="4">
            <div className="mb-2 text-xl font-bold">Gap</div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetGap("0");
                }}
            >
                <RadioGroupItem value="0" id="gap-0" />
                <Label htmlFor="gap-0">0px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetGap("4");
                }}
            >
                <RadioGroupItem value="4" id="gap-4" />
                <Label htmlFor="gap-4">4px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetGap("8");
                }}
            >
                <RadioGroupItem value="8" id="gap-8" />
                <Label htmlFor="gap-8">8px</Label>
            </div>
        </RadioGroup>
    );
}
