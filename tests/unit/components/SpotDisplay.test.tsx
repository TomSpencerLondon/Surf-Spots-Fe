import { screen, within } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import React, { useEffect } from "react";
import SpotDisplay from "../../../src/components/SpotDisplay";
import * as getSpotList from "../../../src/api/getSpotList";
import { namedTypes } from "ast-types";
import { render } from "../../helpers/testUtils";

const spyOnGetSpotList = jest.spyOn(getSpotList, "default");

describe("Display", () => {
  it("shows a header row", async () => {
    render(<SpotDisplay />);
    const rows = await screen.findAllByRole("row");
    expect(within(rows[0]).getAllByRole("columnheader")[0]).toHaveTextContent(
      "Date"
    );
    expect(within(rows[0]).getAllByRole("columnheader")[1]).toHaveTextContent(
      "Name"
    );
  });

  it("shows a row of spots", async () => {
    spyOnGetSpotList.mockResolvedValue(
      Promise.resolve({
        spotRecords: [
          {
            name: "The Wave",
            address:
              "Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE",
            description:
              "The Wave is an inland surf destination where everyone " +
              "can surf on consistent, safe waves all year round. Fantastic variety " +
              "of waves to suit all levels of surfer, from beginner to expert.",
            date: "21/05/21",
          },
        ],
      })
    );

    render(<SpotDisplay />);

    await screen.findByText("21/05/21");
    const rows = await screen.findAllByRole("row");

    expect(within(rows[1]).getAllByRole("cell")[0]).toHaveTextContent(
      "21/05/21"
    );
    expect(within(rows[1]).getAllByRole("cell")[1]).toHaveTextContent(
      "The Wave"
    );
  });

  it("gets recent spots", async () => {
    // set up
    render(<SpotDisplay />);

    // assertion
    expect(spyOnGetSpotList).toBeCalled();
  });
});
