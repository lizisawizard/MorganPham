import React from "react";

const TeamCard = ({name, type, img}) => {

    return (
        <div className="teamCard">
            <img className={`teamCard--img ${type}`} src={img}/>
            <h1 className="teamCard--name">{name}</h1>
        </div>
    )
}

export default TeamCard;