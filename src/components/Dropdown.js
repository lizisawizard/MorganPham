import React, { useState } from "react";

const Dropdown = ({children, content, color}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='dropdown' >
            <div className={`dropdown--button ${color}`}onClick={() => setOpen(!open)}>
              {children}
            <span class={`material-symbols-outlined ${open ? "clicked" : ""}`}>
                expand_more
            </span>  
            </div>
            <div className={`dropdown--content ${open ? "active" : ""}`}> 
                {content}
            </div>
        </div>
    )
}

export default Dropdown;