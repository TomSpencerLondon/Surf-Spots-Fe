import React from "react";
import { useQuery } from "react-query";
import { SpotRecord } from "../interfaces/SpotList";
import getSpotList from "../api/getSpotList";

const SpotDisplay = () => {
  const { data: spotList = {spotRecords: []}, status }  =
    useQuery("getSpotList", getSpotList);

  return (
    <div className="w-1/2 bg-blue-100 grid justify-items-start">
      <table className="justify-self-center">
        <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Date</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
        </tr>
        </thead>
        <tbody>
        {status === "success" && (spotList.spotRecords.map((record: SpotRecord) => {
          return (
            <tr className="table-row" key={`${record.date}-${record.name}`}>
              <td className="border px-8 py-4">{record.date}</td>
              <td className="border px-8 py-4">{record.name}</td>
            </tr>
          );
        }))}
        </tbody>
      </table>
    </div>
  );
};
export default SpotDisplay;
