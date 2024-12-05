import { Label } from "@/components/ui/shadcn/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";

export default function FlexStyle() {
    return (
        <div className="flex justify-around p-10">
            <RadioGroup defaultValue="align-items">
                <div className="mb-2 text-xl font-bold">Align - Items</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flex-start" id="align-start" />
                    <Label htmlFor="align-start">flex-start</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flex-end" id="align-end" />
                    <Label htmlFor="align-end">flex-end</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="center" id="align-center" />
                    <Label htmlFor="align-center">center</Label>
                </div>
            </RadioGroup>

            <RadioGroup defaultValue="justify-content">
                <div className="mb-2 text-xl font-bold">Justify - Content</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flex-start" id="justify-start"/>
                    <Label htmlFor="justify-start">flex-start</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flex-end" id="justify-end" />
                    <Label htmlFor="justify-end">flex-end</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="center" id="justify-center" />
                    <Label htmlFor="justify-center">center</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="space-around" id="space-around" />
                    <Label htmlFor="space-around">space-around</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="space-between" id="space-between" />
                    <Label htmlFor="space-between">space-between</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="space-evenly" id="space-evenly" />
                    <Label htmlFor="space-evenly">space-evenly</Label>
                </div>
            </RadioGroup>

            <RadioGroup defaultValue="gap">
                <div className="mb-2 text-xl font-bold">Gap</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="gap-0" />
                    <Label htmlFor="gap-0">0px</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="gap-4" />
                    <Label htmlFor="gap-4">4px</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="8" id="gap-8" />
                    <Label htmlFor="gap-8">8px</Label>
                </div>
            </RadioGroup>

            <RadioGroup defaultValue="direction">
                <div className="mb-2 text-xl font-bold">Flex-Direction</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="row" id="row" />
                    <Label htmlFor="row">Row</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="col" id="col" />
                    <Label htmlFor="col">Col</Label>
                </div>
            </RadioGroup>

            <RadioGroup defaultValue="shrink">
                <div className="mb-2 text-xl font-bold">Flex-Shrink</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="235" id="235" />
                    <Label htmlFor="235">Box1: 2, Box2: 3, Box3: 5</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="163" id="163" />
                    <Label htmlFor="163">Box1: 1, Box2: 6, Box3: 3</Label>
                </div>
            </RadioGroup>

            <RadioGroup defaultValue="grow">
                <div className="mb-2 text-xl font-bold">Flex-Grow</div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="244" id="244" />
                    <Label htmlFor="244">Box1: 2, Box2: 4, Box3: 4</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="343" id="343" />
                    <Label htmlFor="343">Box1: 3, Box2: 4, Box3: 3</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
