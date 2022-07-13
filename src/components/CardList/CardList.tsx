import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spell } from "../../types/spellInterface";
import { RootState } from "../../types/store";
import SpellCard from "../SpellCard/SpellCard";

const CardList = () => {
  const [spells, setSpells] = useState<Spell[]>([]);

  //get state from redux-store
  const { spellList } = useSelector((state: RootState) => state.spells);

  useEffect(() => {
    setSpells(spellList);
  }, [spellList]);

  return (
    <div className="card-list" data-testid="card-list-element">
      {spells.map((spell, index: number) => (
        <SpellCard index={index} key={index} spell={spell} />
      ))}
    </div>
  );
};

export default CardList;
