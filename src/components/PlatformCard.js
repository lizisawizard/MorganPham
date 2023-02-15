import React from "react";

const PlatformCard = ({title, description, icon, number}) => {
    return (
        <div className={`platformCard ${number}`}>
            <div className="platformCard--icon-container">
            <span className="material-symbols-outlined">
                {icon}
            </span>
            </div>
            <span>
                <h2 className="platformCard--title">{title}</h2>
                <p className="platformCard--description">{description}</p>
            </span>
        </div>
    )
}

export default PlatformCard;