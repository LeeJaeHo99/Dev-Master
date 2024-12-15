import TestComponent from './TestComponent';
import PraComponent from './PraComponent';

export default function TestAndPra(){
    return(
        <div className="flex items-start justify-start gap-4 w-full h-full p-8">
            <TestComponent/>
            <PraComponent/>
        </div>
    )
}