import React, { useState } from "react";
import SpellCard from "../SpellCard/SpellCard";

const CardList = () => {
  const [spells, setSpells] = useState([
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    },
    {
      index: "acid-splash",
      name: "Acid Splash",
      url: "/api/spells/acid-splash",
    },
    {
      index: "aid",
      name: "Aid",
      url: "/api/spells/aid",
    },
    {
      index: "alarm",
      name: "Alarm",
      url: "/api/spells/alarm",
    },
    {
      index: "alter-self",
      name: "Alter Self",
      url: "/api/spells/alter-self",
    },
    {
      index: "animal-friendship",
      name: "Animal Friendship",
      url: "/api/spells/animal-friendship",
    },
    {
      index: "animal-messenger",
      name: "Animal Messenger",
      url: "/api/spells/animal-messenger",
    },
    {
      index: "animal-shapes",
      name: "Animal Shapes",
      url: "/api/spells/animal-shapes",
    },
    {
      index: "animate-dead",
      name: "Animate Dead",
      url: "/api/spells/animate-dead",
    },
    {
      index: "animate-objects",
      name: "Animate Objects",
      url: "/api/spells/animate-objects",
    },
    {
      index: "antilife-shell",
      name: "Antilife Shell",
      url: "/api/spells/antilife-shell",
    },
  ]);

  return (
    <div className="card-list" data-testid="card-list-element">
      {spells.map((spell, index: number) => (
        <SpellCard index={index} key={index} spell={spell}  />
      ))}
    </div>
  );
};

export default CardList;
