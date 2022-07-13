import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { SpellCardInterface } from "../../types/spellCardInterface";

const SpellCard = (props: SpellCardInterface) => {
  
  const { index, spell } = props;

  return (
    <div className="card-row" key={index} onClick={() => {}} data-testid="card-element">
      <div>{spell.name}</div>
      <div className="icons">
        <MdFavoriteBorder onClick={() => {}} className="fav-icon" />
        
      </div>
    </div>
  );
};

export default SpellCard;
