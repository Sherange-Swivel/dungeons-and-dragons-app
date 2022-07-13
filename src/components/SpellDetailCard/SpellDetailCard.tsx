import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/store";

const SpellDetailCard = () => {
  const { spellDetails } = useSelector((state: RootState) => state.spells);
  return (
    <div data-testid="card-detail-element">
      <div className="card-row">
        <div>
          <h4>Name :</h4>
        </div>
        <div>
          <h4>{spellDetails?.name}</h4>
        </div>
      </div>

      <div className="card-row">
        <div>
          <h4>Level :</h4>
        </div>
        <div>
          <h4>{spellDetails?.level}</h4>
        </div>
      </div>

      <div className="card-row">
        <div>
          <h4>Range :</h4>
        </div>
        <div>
          <h4>{spellDetails?.range}</h4>
        </div>
      </div>

      <div className="card-row">
        <div>
          <h4>Description</h4>
        </div>
      </div>

      <div className="card-row">
        <div>
          <h4>{spellDetails?.desc}</h4>
        </div>
      </div>
    </div>
  );
};

export default SpellDetailCard;
