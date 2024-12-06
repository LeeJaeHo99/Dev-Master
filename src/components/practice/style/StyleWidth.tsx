export default function StyleWidth({clickSetWidth, RadioGroup, RadioGroupItem, Label}) {
    return (
        <RadioGroup defaultValue="160">
            <div className="mb-2 text-xl font-bold">Width</div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetWidth(20);
                }}
            >
                <RadioGroupItem value="80" id="w-80" />
                <Label htmlFor="w-80">width: 80px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetWidth(40);
                }}
            >
                <RadioGroupItem value="160" id="w-160" />
                <Label htmlFor="w-160">width: 160px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetWidth(60);
                }}
            >
                <RadioGroupItem value="240" id="w-240" />
                <Label htmlFor="w-240">width: 240px</Label>
            </div>
        </RadioGroup>
    );
}
