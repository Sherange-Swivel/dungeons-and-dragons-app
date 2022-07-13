import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { SpellCardInterface } from "../../types/spellCardInterface";
import { Spell } from "../../types/spellInterface";
import { useDispatch, useSelector } from "react-redux";
import { setSpellList } from "../../redux/spellSlice";
import { RootState } from "../../types/store";

const SpellCard = (props: SpellCardInterface) => {
  const { index, spell } = props;

  //get state from redux-store
  const { spellList } = useSelector((state: RootState) => state.spells);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addToFav = (spell: Spell) => {
    const newState = spellList.map((obj) => {
      if (obj.index === spell.index) {
        return { ...obj, isFav: spell.isFav ? false : true };
      }
      return obj;
    });
    dispatch(setSpellList(newState));
  };

  return (
    <div className="card-row" key={index} data-testid="card-element">
      <div>{spell.name}</div>
      <div className="icons">
        <BsFillArrowRightCircleFill
          onClick={() => {
            navigate(`/spells/${spell.index}`);
          }}
          className="delete-icon"
        />
        {spell.isFav ? (
          <MdFavorite
            onClick={() => {
              addToFav(spell);
            }}
            className="fav-icon"
          />
        ) : (
          <MdFavoriteBorder
            onClick={() => {
              addToFav(spell);
            }}
            className="fav-icon"
          />
        )}
      </div>
    </div>
  );
};

export default SpellCard;
