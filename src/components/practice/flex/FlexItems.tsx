export default function FlexItems({clickSetItems, RadioGroup, RadioGroupItem, Label}) {
    return (
        <RadioGroup defaultValue="center">
            <div className="mb-2 text-xl font-bold">Align - Items</div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetItems("start");
                }}
            >
                <RadioGroupItem value="flex-start" id="align-start" />
                <Label htmlFor="align-start">flex-start</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetItems("end");
                }}
            >
                <RadioGroupItem value="flex-end" id="align-end" />
                <Label htmlFor="align-end">flex-end</Label>
            </div>
            <div
                className="flex items-center space-x-2"
                onClick={() => {
                    clickSetItems("center");
                }}
            >
                <RadioGroupItem value="center" id="align-center" />
                <Label htmlFor="align-center">center</Label>
            </div>
        </RadioGroup>
    );
}
