export default function FlexShrink({
    clickSetShrink,
    RadioGroup,
    RadioGroupItem,
    Label,
}) {
    return (
        <RadioGroup defaultValue="shrink">
            <div className="mb-2 text-xl font-bold">Flex-Shrink</div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetShrink([2, 3, 5])
            }}>
                <RadioGroupItem value="235" id="235" />
                <Label htmlFor="235">Box1: 2, Box2: 3, Box3: 5</Label>
            </div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetShrink([1, 6, 3])
            }}>
                <RadioGroupItem value="163" id="163" />
                <Label htmlFor="163">Box1: 1, Box2: 6, Box3: 3</Label>
            </div>
        </RadioGroup>
    );
}
