import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SpellCardInterface } from "../../types/spellCardInterface";

const SpellCard = (props: SpellCardInterface) => {
  const { index, spell } = props;

  let navigate = useNavigate();

  return (
    <div
      className="card-row"
      key={index}
      onClick={() => {
        navigate(`/spells/${spell.index}`);
      }}
      data-testid="card-element"
    >
      <div>{spell.name}</div>
      <div className="icons">
        <MdFavoriteBorder onClick={() => {}} className="fav-icon" />
      </div>
    </div>
  );
};

export default SpellCard;
