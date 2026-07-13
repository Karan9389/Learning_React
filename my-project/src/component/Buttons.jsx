import { useState } from "react";
function Button({color_name, color_class, onClickAction}) {
    // const[windowbg, setWindowbg] = useState('bg-slate-100');
    return (
        <button className={`${color_class}  font-bold py-2 px-4 rounded-full`} onClick={onClickAction} >
            {color_name}
        </button>
    );
}
export default Button;