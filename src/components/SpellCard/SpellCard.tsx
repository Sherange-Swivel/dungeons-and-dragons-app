import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { SpellCardInterface } from "../../types/SpellCardInterface";

const SpellCard = (props: SpellCardInterface) => {
  
  const { index, spell } = props;

  return (
    <div className="card-row" key={index} onClick={() => {}} data-testid="card-element">
      <div>{spell.name}</div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => {}} className="delete-icon" />
        <MdFavoriteBorder onClick={() => {}} className="fav-icon" />
        
      </div>
    </div>
  );
};

export default SpellCard;
