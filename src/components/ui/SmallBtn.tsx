export default function SmallBtn({text, onclick}){
    return(
        <button className="w-1/5 p-1 bg-mainColor rounded-sm text-white" onclick={onclick}>{text}</button>
    );
}