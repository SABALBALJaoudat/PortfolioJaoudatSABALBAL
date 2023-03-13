import React, {useRef, useState} from 'react';

function IconButton({children, text, color}) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex flex-row p-2 m-2 items-center rounded-xl text-white ${color || "bg-gray-500"}`}>
            {children}
            <div
                className={'overflow-x-hidden transition-all duration-300 ease-out'}
                style={{width: hovered ? ref.current?.offsetWidth || 0 : 0}}>
                <span ref={ref} className={"px-2"}>
                    {text}
                </span>
            </div>
        </button>
    );
}

export default IconButton;