export default function FlexGrow({
    clickSetGrow,
    RadioGroup,
    RadioGroupItem,
    Label,
}) {
    return (
        <RadioGroup defaultValue="grow">
            <div className="mb-2 text-xl font-bold">Flex-Grow</div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetGrow([2, 4, 4]);
            }}>
                <RadioGroupItem value="244" id="244" />
                <Label htmlFor="244">Box1: 2, Box2: 4, Box3: 4</Label>
            </div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetGrow([3, 4, 3])
            }}>
                <RadioGroupItem value="343" id="343" />
                <Label htmlFor="343">Box1: 3, Box2: 4, Box3: 3</Label>
            </div>
        </RadioGroup>
    );
}
