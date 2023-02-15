import React from "react";
import Dropdown from "./Dropdown";

const PlatformPoint = ({title, subtitle, icon, initiatives, color}) => {
    return (
        <div className={`platformPoint ${color}`}>
            <span className="material-symbols-outlined platform">
                {icon}
            </span>
            <h2 className="platformPoint title">{title}</h2>
            <p className="platformPoint subtitle">{subtitle}</p>
            {initiatives.map((initiative) => {
                return (
                    <Dropdown content={initiative.content} color={color}>
                        {initiative.title}
                    </Dropdown>
                )
            })}
        </div>
    )
}

export default PlatformPoint;