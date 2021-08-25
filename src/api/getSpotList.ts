import fetch from "isomorphic-unfetch";
import { SpotList, SpotRecord } from "../interfaces/SpotList";

async function fetchSpots() {
  const response = await fetch(process.env.SURF_SPOTS_API!, { mode: "cors" });
  return response.json();
}

const getSpotList = async (): Promise<SpotList> => {
  const result = await fetchSpots();
  const spots: SpotRecord[] = result.map((row: any) => {
    return {
      name: row.name,
      address: row.address,
      description: row.description,
      date: row.date_visited
    };
  });
  return {
    spotRecords: spots
  };
};

export default getSpotList;
