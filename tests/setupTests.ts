import "@testing-library/jest-dom";
import { config } from "dotenv";
import { server } from "./mocks/server";

config();

server.listen();
