import { rest } from "msw";
import Clock from "./Surf/data/Clock";

const clock: Clock = {
  todayAsString: () =>
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
};

export const handlers = [
  rest.get("http://localhost:8000/api/v1/spots", (_req, res, ctx) => {
    return res(
      ctx.json({
        spot_id: 1,
        name: "The Wave",
        address: "Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE",
        description: "The Wave is an inland surf destination where everyone can surf on consistent, safe waves all year round. Fantastic variety of waves to suit all levels of surfer, from beginner to expert.",
        date_visited: "2021-08-15"
      })
    );
  })
];


