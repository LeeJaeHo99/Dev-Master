export default function StyleHeight({clickSetHeight, RadioGroup, RadioGroupItem, Label}) {
    return (
        <RadioGroup defaultValue="160">
            <div className="mb-2 text-xl font-bold">Height</div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetHeight(16);
                }}
            >
                <RadioGroupItem value="64" id="h-64" />
                <Label htmlFor="h-64">height: 64px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetHeight(24);
                }}
            >
                <RadioGroupItem value="96" id="h-96" />
                <Label htmlFor="h-96">height: 96px</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetHeight(32);
                }}
            >
                <RadioGroupItem value="128" id="h-128" />
                <Label htmlFor="h-128">height: 128px</Label>
            </div>
        </RadioGroup>
    );
}
