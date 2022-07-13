import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import { baseUrl, endPoints } from "../constants/appConsts";
import { setSpellDetails } from "../redux/spellSlice";
import SpellDetailCard from "../components/SpellDetailCard/SpellDetailCard";

const SpellDetailPage = () => {
  //isLoading
  const [isLoading, setIsloading] = useState(true);

  const dispatch = useDispatch();
  let { spellIndex } = useParams();

  const fetchSpellDetails = async () => {
    try {
      setIsloading(true);
      const responce = await axios.get(baseUrl + endPoints.spells + spellIndex, {
        headers: { Accept: "application/json" },
      });
      if (responce && responce.status === 200) {
        dispatch(setSpellDetails(responce.data));
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchSpellDetails();
  }, []);

  const renderLoder = () => (
    <div className="app-loader">
      <GridLoader />
    </div>
  );

  const renderContent = () => <div>
    <SpellDetailCard/>
  </div>;

  return (
    <div data-testid="spell-detail-element">
      {isLoading ? renderLoder() : renderContent()}
    </div>
  );
};

export default SpellDetailPage;
