import fetch from "isomorphic-unfetch";
import { SpotList } from "../interfaces/SpotList";

const getSpotList = async (): Promise<SpotList> => {
  const response = await fetch("https://realsurf.com/spots");
  const { spots } = await response.json();

  return {
    spotRecords: spots,
  };
};

export default getSpotList;
