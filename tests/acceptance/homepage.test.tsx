import React from "react";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import mockdate from "mockdate";
import Homepage from "../../src/pages";
import { render } from "../helpers/testUtils";

test("should pass", async () => {
  // Date       || Name
  // 15/08/2021 || The Wave
  // 10/09/2020 || Croyde
  // 06/08/2020 || Fistral

  let queryClient = new QueryClient();
  render(<Homepage />);

  mockdate.set("2020-08-06");
  userEvent.type(screen.getByLabelText("Name"), "The Wave");
  userEvent.type(
    screen.getByLabelText("Address"),
    "Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE"
  );
  userEvent.type(
    screen.getByLabelText("Description"),
    "The Wave is an inland surf destination where everyone can surf on consistent, safe waves all year round. Fantastic variety of waves to suit all levels of surfer, from beginner to expert."
  );
  userEvent.click(screen.getByRole("button", { name: /add/i }));

  await screen.findByText("06/08/2020");
  mockdate.set("2020-09-10");
  userEvent.type(screen.getByLabelText("Name"), "Croyde");
  userEvent.type(
    screen.getByLabelText("Address"),
    "Croyde Bay, Croyde, Braunton EX33 1NU"
  );
  userEvent.type(
    screen.getByLabelText("Description"),
    "Thought to be one of the best places to surf in the UK, in competition with Cornish waves, Croyde gets our vote any day."
  );
  userEvent.click(screen.getByRole("button", { name: /add/i }));

  await screen.findByText("10/09/2020");
  mockdate.set("2021-08-15");
  userEvent.type(screen.getByLabelText("Name"), "Fistral");
  userEvent.type(
    screen.getByLabelText("Address"),
    "Fistral Beach, Newquay, Cornwall TR7 1HY"
  );
  userEvent.type(
    screen.getByLabelText("Description"),
    "This splendid beach offers excellent water for surfing and body boarding."
  );
  userEvent.click(screen.getByRole("button", { name: /add/i }));

  await screen.findByText("15/08/2021");

  const rows = await screen.findAllByRole("row");
  expect(within(rows[0]).getAllByRole("cell")[0]).toHaveTextContent("Date");
  expect(within(rows[0]).getAllByRole("cell")[1]).toHaveTextContent("Name");

  await screen.findByText("Fistral");

  expect(within(rows[1]).getAllByRole("cell")[0]).toHaveTextContent(
    "15/08/2021"
  );
  expect(within(rows[1]).getAllByRole("cell")[1]).toHaveTextContent("The Wave");

  expect(within(rows[2]).getAllByRole("cell")[0]).toHaveTextContent(
    "10/09/2020"
  );
  expect(within(rows[2]).getAllByRole("cell")[1]).toHaveTextContent("Croyde");

  expect(within(rows[3]).getAllByRole("cell")[0]).toHaveTextContent(
    "06/08/2020"
  );
  expect(within(rows[3]).getAllByRole("cell")[1]).toHaveTextContent("Fistral");
});
