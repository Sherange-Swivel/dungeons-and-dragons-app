import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";

const SpellDetailPage = () => {
  //isLoading
  const [isLoading, setIsloading] = useState(true);

  const dispatch = useDispatch();

  const fetchSpellDetails = () => {};

  useEffect(() => {
    fetchSpellDetails();
  }, []);

  const renderLoder = () => (
    <div className="app-loader">
      <GridLoader />
    </div>
  );

  const renderContent = () => <div></div>;

  return (
    <div data-testid="spell-detail-element">
      {isLoading ? renderLoder() : renderContent()}
    </div>
  );
};

export default SpellDetailPage;
