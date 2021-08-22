import { rest } from "msw";
import Clock from "./Surf/data/Clock";

const clock: Clock = {
  todayAsString: () =>
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
};

export const handlers = [
  rest.get("https://realsurf.com/spots", (_req, res, ctx) => {
    return res(
      ctx.json({
        hello: "hello",
      })
    );
  }),
];
