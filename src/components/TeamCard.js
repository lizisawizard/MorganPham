import React from "react";

const TeamCard = ({name, img}) => {

    return (
        <div className="teamCard">
            <img className="teamCard--img" src={img}/>
            <h1 className="teamCard--name">{name}</h1>
        </div>
    )
}

export default TeamCard;