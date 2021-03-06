import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import CardList from "../components/CardList/CardList";
import SpellSearch from "../components/SpellSearch/SpellSearch";
import { baseUrl, endPoints } from "../constants/appConsts";
import { setSpellList } from "../redux/spellSlice";

const HomePage = () => {
  //isLoading
  const [isLoading, setIsloading] = useState(true);

  const dispatch = useDispatch();

  const fetchSpells = async () => {
    try {
      setIsloading(true);
      const responce = await axios.get(baseUrl + endPoints.spells, {
        headers: { Accept: "application/json" },
      });
      if (responce && responce.status === 200) {
        const { results } = responce.data;
        dispatch(setSpellList(results));
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
    }
  };

  const searchSpells = async (input: string) => {
    try {
      const responce = await axios.get(
        baseUrl + endPoints.spells + `/?name=${input}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      if (responce && responce.status === 200) {
        const { results } = responce.data;
        dispatch(setSpellList(results));
      }
    } catch (error) {
      setIsloading(false);
    }
  };

  const renderContent = () => (
    <div>
      <SpellSearch handleSearch={searchSpells} />
      <CardList />
    </div>
  );

  const renderLoder = () => (
    <div className="app-loader">
      <GridLoader />
    </div>
  );

  useEffect(() => {
    fetchSpells();
  }, []);

  return (
    <div data-testid="home-element">
      {isLoading ? renderLoder() : renderContent()}
    </div>
  );
};

export default HomePage;
