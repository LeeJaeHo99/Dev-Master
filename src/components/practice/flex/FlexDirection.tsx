export default function FlexDirection({
    clickSetDirection,
    RadioGroup,
    RadioGroupItem,
    Label,
}) {
    return (
        <RadioGroup defaultValue="row">
            <div className="mb-2 text-xl font-bold">Flex-Direction</div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetDirection('row');
            }}>
                <RadioGroupItem value="row" id="row" />
                <Label htmlFor="row">Row</Label>
            </div>
            <div className="flex items-center space-x-2" onClick={() => {
                clickSetDirection('col');
            }}>
                <RadioGroupItem value="col" id="col" />
                <Label htmlFor="col">Col</Label>
            </div>
        </RadioGroup>
    );
}
